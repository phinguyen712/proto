const mongoose = require('mongoose'),
        passportLocalMongoose = require("passport-local-mongoose");

const accountsSchema = new mongoose.Schema({
        username: String,
        type: String,
        guidelines:[{ type: mongoose.Schema.Types.ObjectId,
                ref: "Guideline"
        }]     
});

accountsSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', accountsSchema);
