const express = require('express');
const app = express();

app.get('/test', function(request, respone){
    respone.send("abcdhika")
})

app.listen('12345');