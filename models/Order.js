const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    customerId :{
        type: String,
        required: true
    },
    customerName :{
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
    amountPaid:{
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true
    },
    customerTown :{
        type: String,
        required: true
    },
    customerAddress :{
        type: String,
        required: true
    },
    customerGPS :{
        type: String,
    },
    isDelivered:{
        type: Boolean,
        required: true
    }
}, {timestamps: true}) 

const Order = mongoose.model('order', OrderSchema)
module.exports = Order