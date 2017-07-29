"use strict";

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.get('/', function (req,res) {
res.sendFile(path.resolve(_dirname, 'public', 'index.html'))
});
var port = process.env.PORT || 4007; // set our port

app.listen(port, function(){
    console.log("Express server listening on port %d",port);
});
