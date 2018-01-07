const middlewareObj={};

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.sessionID){
        next()
    }else{
        console.log('unauthenticated');
        res.redirect("/");
    }
};

module.exports = middlewareObj;
