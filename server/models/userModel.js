const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'customer',
        enum: ["customer", "manager", "admin"],
        required: false
    },
    accessToken: {
        type: String
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;