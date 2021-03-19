const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = new express();

const db = require('./config/db_config').MongoURI

// Reguire Models
const Products = require('./models/Products')
const Users = require('./models/Users')
const TodaysDeals = require('./models/TodaysDeals')

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, (error, connected)=>{
    if(connected){
        console.log('MongoDb connected...')
    }else{
        console.log('MongoDb failed to connect.')
    }
})


// ##################### ACCOUNT REGISTRATION #######################

app.post('/api/register-user', function(req, res){
    
})


app.post('/api/checkout', function(req, res){

})



// ##################### SELLER REGISTRATION #######################
app.post('/api/seller_reg', function(req, res){
    
})



// ##################### GET PRODUCTS #######################

app.get('/api/products', function(req, res){
    Products.find().then((products)=>{res.json(products)})
})

app.get('/api/todays-deals', function(req, res){
    TodaysDeals.find().then((products)=>{res.json(products)})
})


app.use(cors())

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});