const User = require('../models/accounts.js');
passport = require('passport');

module.exports = (app) => {
    app.post("/account/signup", function(req,res){
        User.register(new User({username: req.body.username}), req.body.password, (err,user) =>{
            if(err){
                res.json({err:err.message})
            }else{
                passport.authenticate("local")(req,res, function(){
                  res.json({user:user});
                });
            }
        });
    });

    app.post('accounts/login', function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.json({username:false});
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.json(req.user);
            });
        })(req, res, next);
    });

    app.get("accounts/logout",function(req,res){
        req.logout();
        res.redirect("/");
    });
};