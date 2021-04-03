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
        deliveryAddress,
        isDelivered
    } = req.body
});


// @description     Get Order by id
// @route           GET /api/order/:id
// @access          Private
router.get("/api/order/:id", function (req, res) {

});


module.exports = router;
