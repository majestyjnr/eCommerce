const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Products = require("../models/Products");
const Users = require("../models/Users");
const getToken = require("../config/auth");
const Product = require("../models/Products");
const Coupon = require("../models/Coupon");


// ##################### ORDER API #######################

// Create Order
router.post("/api/order", function (req, res) {

});

// Get Order
router.get("/api/order/:id", function (req, res) {

});


module.exports = router;
