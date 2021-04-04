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
        customerName,
        customerPhone,
        products,
        isPaid,
        amountPaid,
        paymentMethod,
        customerTown,
        customerAddress,
        customerGPS,
        isDelivered
    } = req.body
    
    const newOrder = new Orders({
        customerId: customerId,
        customerName: customerName,
        customerPhone: customerPhone,
        products: products,
        isPaid: isPaid,
        amountPaid: amountPaid,
        paymentMethod: paymentMethod,
        customerTown: customerTown,
        customerAddress: customerAddress,
        customerGPS: customerGPS,
        isDelivered: isDelivered
    })
    newOrder.save().then(order=>{
        res.send(order)
    })
});



// @description     Get Order by id
// @route           GET /api/order/:id
// @access          Private
router.get("/api/order/:id", function (req, res) {
    Orders.findById(req.params.id).then(order=>{
        if(order){
            res.send(order)
        }else{
            res.status(400).json({msg: 'Order not found'})
        }
    })
});


module.exports = router;
