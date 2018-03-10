
const express           =   require('express'),
app						=	express(),
path                    = require('path'),
cluster                 = require('cluster'),
numCPUs                 = require('os').cpus().length,
bodyParser              =   require('body-parser'),
http 					= 	require('http'),
mongoose                =   require('mongoose'),
api						=   require('./server/api/index.js'),
Account                 =   require('./server/models/accounts.js'),
passport                =   require("passport"),
flash                   =   require("connect-flash"),
LocalStrategy           =   require("passport-local");

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
  
} else {
    app.use(require("express-session")({
        secret: "Journey code",
        resave: false,
        saveUninitialized: false
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    //settings for passport authorizations, sessions, and hash
    //initialize passport
    app.use(passport.initialize());
    app.use(passport.session());

    //decode and endcode sessions for Authorization
    passport.use(new LocalStrategy(Account.authenticate()));
    passport.serializeUser(Account.serializeUser());
    passport.deserializeUser(Account.deserializeUser());

    //mongolab connection * MAKE SURE TO DELETET HIS IN PRODUCTION
    const url = process.env.HospitalDBURL;
    mongoose.connect('mongodb://adminaccount:survey123@ds161016.mlab.com:61016/survey');

    // Priority serve any static files.
    app.use(express.static(path.resolve(__dirname, '/build')));

    //all of the routes aka API
    api(app);

    // All remaining requests return the React app, so it can handle routing.
    app.get('*', function(request, response) {
        response.sendFile(path.resolve(__dirname, '/build', 'index.html'));
    });

    //runs server
    const port = parseInt(process.env.PORT, 10) || 3001;
    app.set('port', port);

    const server = http.createServer(app);
    server.listen(port, () => {
        console.error(`Node cluster worker ${process.pid}: listening on port ${port}`);
    });
}