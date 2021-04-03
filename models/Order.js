const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    customerId :{
        type: String,
        required: true
    },
    customerPhone :{
        type: String,
        required: true
    },
    products :{
        type: Array,
        required: true
    },
    isPaid :{
        type: Boolean,
        required: true
    },
    deliveryAddress :{
        type: String,
        required: true
    },
    isDelivered:{
        type: Boolean,
        required: true
    }
}, {timestamps: true}) 

const Order = mongoose.model('order', OrderSchema)
module.exports = Order