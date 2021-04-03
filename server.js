const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = new express();

const db = require('./config/db_config').MongoURI

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, (error, connected)=>{
    if(connected){
        console.log('MongoDb connected...')
    }else{
        console.log('MongoDb failed to connect.')
    }
})

app.use(cors());
app.use(express.json())

// Require Routes
const coupon = require('./routes/couponRoutes')
const products = require('./routes/productsRoute')
const order = require('./routes/orderRoutes')
const user = require('./routes/userRoutes')

app.use('/', coupon)
app.use('/', products)
app.use('/', order)
app.use('/', user)

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});