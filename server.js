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
const index = require('./routes/index')

app.use('/', index)


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});