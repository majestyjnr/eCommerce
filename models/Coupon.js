const mongoose = require('mongoose')

const CouponSchema = new mongoose.Schema({
    couponCode:{
        type: String,
        required: true
    },
    couponValue:{
        type: Number,
        required: true
    },
    isUsed: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Coupon = mongoose.model('coupon', CouponSchema)
module.exports = Coupon