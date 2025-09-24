const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    behavior: { type: Array, default: [] }
});

module.exports = mongoose.model('User', userSchema);
