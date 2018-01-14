const mongoose = require('mongoose');

const guidelinesSchema = new mongoose.Schema({
        name: String,
        description: String,
        url: String,
        meta: {
            created_at: {type: Date, default: Date.now},
            updated_at: {type: Date, default: Date.now},
          },
});

module.exports = mongoose.model('GuideLine', guidelinesSchema);
