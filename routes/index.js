const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Products = require("../models/Products");
const Users = require("../models/Users");
const TodaysDeals = require("../models/TodaysDeals");
const getToken = require("../config/auth");
const Product = require("../models/Products");

// ##################### ACCOUNT REGISTRATION #######################

// Register User
router.post("/api/register-user", function (req, res) {
  // const {firstname, lastname, email, phone, password} = req.body

  // if(!firstname || !lastname || !email || !phone || !password){
  //     res.status(400).json({msg: 'Enter required fields'})
  // }

  Users.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({ msg: "This user already exists!" });
    } else {
      const newUser = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: [],
        cart: [],
        wishlist: [],
        password: req.body.password,
      });

      // Hash Password with BcryptJs
      bcrypt.genSalt(10, (errr, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          // Set Password to Hash
          newUser.password = hash;

          // Save the New Admin into the Database
          newUser
            .save()
            .then((user) => {
              jwt.sign(
                { id: user._id }, // Payload
                config.get("jwtSecret"), // Get Secret
                { expiresIn: 3600 }, // Set Expiry
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    response: {
                      msg: "User Registered Successfully",
                    },
                    token,
                    user: {
                      id: user._id,
                      firstname: user.firstname,
                      lastname: user.lastname,
                      phone: user.phone,
                    },
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        })
      );
    }
  });
});

// Sigin User
router.post("/api/user/signin", function (req, res) {
  Users.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      res.status(401).send({ msg: "The email entered isn't registered" });
    } else if (user) {
      // Match Password
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
            res.send({
                _id: user._id, 
                firstname: user.firstname, 
                lastname: user.lastname, 
                email: user.email, 
                phone: user.phone, 
                token: getToken(user)
            })
        }
      });
    }
  });
});

router.post("/api/checkout", function (req, res) {});

// ##################### SELLER REGISTRATION #######################
router.post("/api/seller_reg", function (req, res) {});


// ##################### GET PRODUCTS #######################

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
  });
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
