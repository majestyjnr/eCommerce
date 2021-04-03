const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Orders = require("../models/Order");




// ##################### ORDER API #######################

// @description     Create Order
// @route           POST /api/order
// @access          Private
router.post("/api/order", function (req, res) {
    const {
        customerId,
        customerPhone,
        products,
        isPaid,
        amountPaid,
        paymentMethod,
        deliveryAddress,
        isDelivered
    } = req.body
    
    const newOrder = new Orders({
        customerId: customerId,
        customerPhone: customerPhone,
        products: products,
        isPaid: true,
        amountPaid: amountPaid,
        paymentMethod: paymentMethod,
        deliveryAddress: deliveryAddress,
        isDelivered: false
    })
    newOrder.save().then(order=>{

    })
});



// @description     Get Order by id
// @route           GET /api/order/:id
// @access          Private
router.get("/api/order/:id", function (req, res) {

});


module.exports = router;
