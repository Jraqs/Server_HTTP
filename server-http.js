var express = require('express');
var app = express();
var path = require('path')

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/sub', function(req, res){
  res.send('Sub');
});

app.use(function(req, res){
  res.status(404).send('404: Page not Found')
});

app.use(function(error, req, res, next) {
   res.status(500).send('500: Internal Server Error');
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
})
