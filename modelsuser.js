const mongoose = require('mongoose');

// نموذج المستخدم
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    scans: [
        {
            target: String,
            result: Object,
            date: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);