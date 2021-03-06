const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Users = require("../models/Users");
const getToken = require("../config/auth");

// ##################### USER API #######################

// @description     Register User
// @route           POST /api/register-user
// @access          Public
router.post("/api/register-user", function (req, res) {
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

// @description     Signin User
// @route           POST /api/user/signin
// @access          Public
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

module.exports = router;
