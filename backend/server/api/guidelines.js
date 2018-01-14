const User = require('../models/accounts.js');
    passport = require('passport'),
    isLoggedIn = require('../helpers/middlewareObj.js').isLoggedIn
    Guidelines = require('../models/guidelines.js');

module.exports = (app) => {
    app.get('/guidelines', (req,res) => {
        Guidelines.find({}, (err,guidelines) =>{
            if(err){
                res.status(400).send();
            }else{
                res.json(guidelines);
            }   
        });
    });
    app.post('/guidelines/create', (req,res) => {
        const newGuidelines = {
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
        Guidelines.create(newGuidelines, (err, createdGuidelines) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(createdGuidelines);
            }
        })
    });
    app.put('/guidelines/edit' , (req,res) => {
        const newGuidelines = {
            id: req.body._id,
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
        Guidelines.findById(newGuidelines, (err, createdGuidelines) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(createdGuidelines);
            }
        })
    });
};
