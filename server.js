const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', function(req, res) {
    res.send("Hello...");
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
