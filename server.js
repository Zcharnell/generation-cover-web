'use strict';

var express = require('express'),
	app = express();

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/scss', express.static(__dirname + '/public/scss'));
app.use('/templates', express.static(__dirname + '/public/templates'));
app.use('/json', express.static(__dirname + '/public/json'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/jquery', express.static(__dirname + '/jquery'));

app.get('/',function(req,res){
	res.sendFile('index.html',{'root':__dirname + '/public'});
});

app.listen('4567', function(){
	console.log('Server running on port 4567');
});