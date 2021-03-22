const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true
    },
    productPrice:{
        type: String,
        required: true
    },
    productCategory:{
        type: String,
        required: true
    },
    productBrand:{
        type: String,
        required: true
    },
    productColor:{
        type: String,
        required: true
    },
    productSize:{
        type: String,
        required: true
    },
    productInStock:{
        type: Boolean,
        required: true
    },
    productImage:{
        type: String,
        required: true
    },
    productDescription:{
        type: String,
        required: true
    },
    productReviews:{
        type: Array,
    },
    countInStock:{
        type: Number,
        required: true
    }
}, {timestamps: true})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product