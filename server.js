'use strict';

var express = require('express'),
	app = express();

app.use('/js', express.static(__dirname + '/prod/js'));
app.use('/sass', express.static(__dirname + '/dev/sass'));
app.use('/css', express.static(__dirname + '/prod/css'));
app.use('/templates', express.static(__dirname + '/dev/templates'));
app.use('/json', express.static(__dirname + '/dev/json'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/prod/assets'));
app.use('/images', express.static(__dirname + '/prod/assets/images'));

app.get('/',function(req,res){
	res.sendFile('index.html',{'root':__dirname + '/prod'});
});

app.listen('5000', function(){
	console.log('Server running on port 5000');
});