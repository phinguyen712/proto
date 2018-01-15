const isLoggedIn = require('../helpers/middlewareObj.js').isLoggedIn,
    Guidelines = require('../models/guidelines.js');

module.exports = (app) => {
    app.get('/guidelines', (req,res) => {
        Guidelines.find({}, (err,guidelines) =>{
            if(err){
                res.status(400).send();
            }else{
                res.status(200).json(guidelines);
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
            _id: req.body._id,
            name: req.body.name,
            description: req.body.description,
            link: req.body.link
        }
        Guidelines.findById(newGuidelines._id, (err, foundGuidelines) => {
            if (err) {
                console.log(err);
            } else {
                foundGuidelines.name = newGuidelines.name;
                foundGuidelines.description = newGuidelines.description;
                foundGuidelines.link = newGuidelines.link;
                foundGuidelines.save((err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        Guidelines.find({}, (err,guidelines) =>{
                            if(err){
                                res.status(400).send();
                            }else{
                                res.status(200).json(guidelines);
                            }  
                        }); 
                    }
                });
            }
        })
    });
};
