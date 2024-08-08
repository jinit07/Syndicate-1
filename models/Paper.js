const mongoose = require('mongoose');

const PaperSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    professor: { type: String, required: true },
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('Paper', PaperSchema);
