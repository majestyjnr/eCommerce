const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Products = require("../models/Products");
const getToken = require("../config/auth");


// ##################### PRODUCTS API #######################

// GET Products {This is also Known as the Best Sellers}
router.get("/api/products", function (req, res) {
  Products.find().then((products) => {
    res.send(products);
  });
});

// Get Product details
router.get("/api/product/:id", function (req, res) {
  Products.findById({ _id: req.params.id }, function (err, product) {
    if (product) {
      res.send(product);
    } else {
      res.status(400).json({ msg: "Product not found!" });
    }
  });
});

// GET Today's Deals 
router.get("/api/products/td", function (req, res) {
  Products.find({isTodaysDeal: true}).then((products) => {
    res.send(products);
  })
});

// GET Today's Deals Product Details
router.get("/api/products/td/:id", function (req, res) {
  Products.find({ _id: req.params.id }, function (err, product) {
    if (product) {
      res.send(product);
    } else {
      res.status(400).json({ msg: "Product not found!" });
    }
  });
});


// GET Audio Products 
router.get("/api/products/audios", function (req, res) {
  Products.find({productCategory: 'Home Theatres/Speakers'}).then((products) => {
    res.send(products);
  });
});


// GET Computer Products 
router.get("/api/products/computers", function (req, res) {
  Products.find({productCategory: 'Computers and Accessories'}).then((products) => {
    res.send(products);
  });
});


// GET Computer Products 
router.get("/api/products/tvs", function (req, res) {
  Products.find({productCategory: 'Televisions'}).then((products) => {
    res.send(products);
  });
});

// GET Trending Products 
router.get("/api/products/trending", function (req, res) {
  Products.find().then((products) => {
    products = products.reverse();
    res.send(products);
  });
});


module.exports = router;
