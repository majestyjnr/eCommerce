const express = require('express');
const mongoose = require('mongoose')
const app = new express();

const db = require('./config/db_config')

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(!error){
        console.log('MongoDb connected...')
    }else{
        console.log('MongoDb failed to connect.')
    }
})

app.get('/', function(req, res){
    res.json()
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});