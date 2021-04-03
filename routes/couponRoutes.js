const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

// Reguire Models
const Coupon = require("../models/Coupon");


// ##################### COUPON API #######################

// @description     Get coupon details
// @route           GET /api/coupon/:coupon
// @access          Public
router.get("/api/coupon/:coupon", function (req, res) {
  Coupon.findOne({couponCode: req.params.coupon, isUsed: false}).then((coupon) => {
    if(coupon){
      res.send(coupon);
    }else{
      res.status(404).send({message: "No valid coupon found"});
    }
  });
});

// @description     Deactivate coupon
// @route           POST /api/deactivate-coupon/:coupon
// @access          Public
router.post("/api/deactivate-coupon/:coupon", function (req, res) {
  Coupon.findOne({couponCode: req.params.coupon, isUsed: false}).then((coupon) => {
    if(coupon){
      const deactivate = {
        $set:{
          isUsed: true
        }
      }
      Coupon.updateOne({couponCode: req.params.coupon}, deactivate, function(err, deactivated){
        res.send('Coupon deactivated successfully');
      })
      
    }else{
      res.status(404).send({message: "No Active coupon found"});
    }
  });
});

module.exports = router;
