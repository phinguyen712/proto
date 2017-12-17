
module.exports = (app) => {
    app.get('/user', function(req, res){
        console.log('hedfdfdfdfdysdfd')
        res.json({"test":'username'});
    });
};