const express = require('express');
const app = new express();

app.get('/', function(req, res){
    res.send('Data will appear here')
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, function(){
    console.log(`Server running on PORT ${PORT}`);
});