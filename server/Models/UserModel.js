const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: [true, "Please enter the Full Name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true, 
        validate: {
            validator: validator.isEmail,
            message: "Please enter a valid email",
        },
    },
    password: {
        type: String,
        required: [true, "Please enter the password"],
        minlength: [6, "Password must be at least 6 characters long"], 
    },
    
    createdAt: {
        type: Date,
        default: Date.now, 
    },
    isActive: {
        type: Boolean,
        default: true, 
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
