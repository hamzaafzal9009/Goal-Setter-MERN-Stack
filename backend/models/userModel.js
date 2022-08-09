const mongoose  = require('mongoose');

const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add valid email address'],
        unique: [true, 'Email is already in use'],
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    },
    timestamps: true,
})

module.exports = mongoose.model("User", userScheme)