const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username name'],
        unique: [true, "This username existed!!"],
        trim: true,
        lowercase: true
    },
    firstname: {
        type: String,
        required: [true, 'Please enter First Name'],
        trim: true,
        lowercase: true
    },
    lastname: {
        type: String,
        required: [true, 'Please enter Last Name'],
        trim: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: [true,"Please eneter Password"],
        minLength: 6,
        validate: function(value) {
            regex = /^[A-Za-z0-9#$&_]+$/
            return regex.test(value);
        }
    },
    email: {
        type: String,
        required: [true,"Please enter Email"],
        unique: [true, "This Email existed!!"],
        trim: true,
        uppercase: true,
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    type: {
        type: String,
        required: [true,"Please enter Type(admin or user)"],
        enum: ['admin', 'user'],
        trim: true,
        lowercase: true
    }
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;