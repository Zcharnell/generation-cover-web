var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/dev'));

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
