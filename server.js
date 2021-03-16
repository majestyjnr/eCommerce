const express = require('express');
const mongoose = require('mongoose')
const app = new express();

const db = require('./config/db_config').MongoURI

// Reguire Models
const Products = require('./models/Products')
const Users = require('./models/Users')

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








// ##################### GET PRODUCTS #######################

app.get('/api/products', function(req, res){
    res.json()
})



const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});