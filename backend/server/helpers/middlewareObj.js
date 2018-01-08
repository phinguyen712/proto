const middlewareObj={};

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated){
        return next()
    }else{
        console.log('unauthenticated');
        res.redirect("/");
    }
};

module.exports = middlewareObj;
