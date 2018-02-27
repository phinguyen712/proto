const Account = require('../models/accounts.js'),
passport = require('passport');

module.exports = (app) => {
    app.get('/account', function(req,res){
        if(!req.user){
            res.status(204).send();
        }else{
            Account.findById(req.user.id,function(err,foundUser){
                if(err){
                    res.status(400).send();
                }else{
                    res.json(JSON.parse(JSON.stringify(foundUser)));
                }
            });
        }
    });
    app.post('/account/signUp', function(req,res){
       Account.register({username: req.body.username}, req.body.password, (err,user) =>{
            if(err){
                res.json({err:err.message})
            }else{
                passport.authenticate('local')(req,res, function(){
                  res.json({user:user});
                });
            }
        });
    });
    // will need req.body.username and req.body.password authenticated.
    app.post('/account/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                console.log(err);
            }
            if (!user) {
                return res.json({username:false});
            }
            req.logIn(user, function(err) {
                if (err) {
                    return console.log(err);
                }
                return res.json(req.user);
            });
        })(req, res, next)
    });

    app.get("/account/logout",function(req,res){
        req.logout();
        res.redirect("/");
    });
};