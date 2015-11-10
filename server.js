var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override');

app.use('/js', express.static(__dirname + '/dev/js'));
app.use('/scss', express.static(__dirname + '/dev/scss'));
app.use('/templates', express.static(__dirname + '/dev/templates'));
app.use('/json', express.static(__dirname + '/dev/json'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/dev/assets'));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dev'));

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
