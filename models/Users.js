const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: Array,
        required: true
    },
    cart:{
        type: Array,
        required: true
    },
    wishlist:{
        type: Array,
        required: true
    },
    password:{
        type: String,
        required: true
    },
}, {timestamps: true})

const User = mongoose.model('user', UserSchema)
module.exports = User