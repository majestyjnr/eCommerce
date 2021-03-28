const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')

// Reguire Models
const Products = require('../models/Products')
const Users = require('../models/Users')
const TodaysDeals = require('../models/TodaysDeals')


// ##################### ACCOUNT REGISTRATION #######################


// Register User
router.post('/api/register-user', function(req, res){

    // const {firstname, lastname, email, phone, password} = req.body

    // if(!firstname || !lastname || !email || !phone || !password){
    //     res.status(400).json({msg: 'Enter required fields'})
    // }

    Users.findOne({email: req.body.email}).then((user)=>{
        if(user){
            res.status(400).json({msg: 'This user already exists!'})
        }else{
            const newUser = new Users({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                address: [],
                cart: [],
                wishlist: [],
                password: req.body.password
            })

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
                        {id: user._id}, // Payload
                        config.get('jwtSecret'), // Get Secret
                        {expiresIn : 3600}, // Set Expiry
                        (err, token) =>{
                            if(err) throw err;
                            res.json({
                                response: {
                                  msg:  'User Registered Successfully'
                                },
                                token,
                                user: {
                                id: user._id,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                phone: user.phone
                            }})
                        }
                    )
                })
                .catch((err) => console.log(err));
            })
            );
        }
    })
})

// Sigin User
router.post('/signin', function(resq, res){
    Users.findOne({email: req.body.email}).then((user) =>{
        if(!user){
            res.status(401).send({msg: "The email entered isn't registered"})
        }else if(user){
            
        }
    }) 
})


router.post('/api/checkout', function(req, res){

})



// ##################### SELLER REGISTRATION #######################
router.post('/api/seller_reg', function(req, res){
    
})



// ##################### GET PRODUCTS #######################

router.get('/api/products', function(req, res){
    Products.find().then((products)=>{res.send(products)})
})

// Get Product details
router.get('/api/product/:id', function(req, res){
    Products.findById({ _id: req.params.id }, function(err, product){
        if(product){
            res.send(product)
        }else{
            res.status(400).json({msg: 'Product not found!'})
        }
    })
})

router.get('/api/todays-deals', function(req, res){
    TodaysDeals.find().then((products)=>{res.send(products)})
})

// GET Today's Deals Product Details
router.get('/api/p/:id', function(req, res){
    TodaysDeals.find({ _id: req.params.id }, function(err, product){
        if(product){
            res.send(product)
        }else{
            res.status(400).json({msg: 'Product not found!'})
        }
    })
})

module.exports = router