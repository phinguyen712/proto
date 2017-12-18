const guidelinesSchema = new mongoose.Schema({
        name: String,
        description: String,
        link: String,
        meta: {
            created_at: {type: Date, default: Date.now},
            updated_at: {type: Date, default: Date.now},
          },
});

module.exports = mongoose.model('GuideLine', guidelinesSchema);
