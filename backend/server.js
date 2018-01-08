
const express           =   require('express'),
app						=	express(),
bodyParser              =   require('body-parser'),
http 					= 	require('http'),
mongoose                =   require('mongoose'),
api						=   require('./server/api/index.js'),
Account                 =   require('./server/models/accounts.js'),
passport                =   require("passport"),
flash                   =   require("connect-flash"),
LocalStrategy           =   require("passport-local");

app.use(require("express-session")({
    secret: "Journey code",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static("public"));


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


//all of the routes aka API
api(app);

//runs server
const port = parseInt(process.env.PORT, 10) || 3001;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`The server is running at localhost:${port}`);
});