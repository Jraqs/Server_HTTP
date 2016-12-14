require('./mongo.js')();
var serv = require('./server_http');
var usr = require('./manip_usr.js');
var MESS = require('./messages.js');
var message = {mes: ""}

var parse_body = function(req)
{
  var sections;

  sections = req.body.split('&');
  sections.forEach((element) => {
    var keyValue = element.split("=");
    req.params[keyValue[0]] = keyValue[1];
  });
}

serv.addRoute('GET', '/users', function(req, res) {
  Users.find(function(err, data){
    res.sendJSON(data)
  })
});

serv.addRoute('GET', '/user/:email', function(req, res) {
  Users.find({email: req.params.id}, function(err, data){
    res.sendJSON(data)
  })
});

// C
serv.addRoute('PUT', '/user', function(req, res) {
    parse_body(req);
    usr.create_usr(req.params['email'], req.params['passwd']);
});

// U
serv.addRoute('POST', '/user/:email', function(req, res) {
    parse_body(req);
    usr.modify_usr(req.params['email'], req.params['passwd']);
});

// D
serv.addRoute('DELETE', '/user/:email', function(req, res) {
    parse_body(req);
    usr.delete_usr(req.params['email'], req.params['passwd'], function(message)
    {
      console.log(MESS[message]);
      res.sends(MESS[message])
    })
  });

serv.listen(5000);
