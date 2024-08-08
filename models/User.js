const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    address: { type: String, required: false},
    role: { type: String, required: false },
    name: { type: String, required: false},
    dob: { type: String, required: false},
    college: { type: String, required: false },
    designation: { type: String, required: false }
});

module.exports = mongoose.model('User', UserSchema);
