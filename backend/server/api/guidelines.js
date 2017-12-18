const User = require('../models/accounts.js');
    passport = require('passport'),
    isLoggedIn = require('../helpers/middlewareObj.js').isLoggedIn
    Guidelines = require('../models/guidelines.js');

module.exports = (app) => {
    app.post('/guideline/create', isLoggedIn, (req,res) => {
        console.log(req.body);
        const newGuidelines = {
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
        Guidelines.create(newGuidelines, (err, createdGuidelines) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200);
            }
        })
    });
};