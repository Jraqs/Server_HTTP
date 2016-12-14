var net = require('net');
var fs = require('fs');
var path = require("path");
var responses = require('./responses.js');
var file = require ('./html_file_processing');
var pars = require("./parsing.js");
var create_req = require('./create_req_obj.js');
var create_resp = require('./create_res_obj.js');
var CODES = require('./codes.js');
var routes = {};
var paths = [];


var server = net.createServer(function(socket)
{
  var timer = false, text = '';

  socket.on('data', function(data)
  {
    if (timer !== false) {
      clearTimeout(timer)
      timer = false
    }

    text += data.toString();

    timer = setTimeout(() => {
        clearTimeout(timer)
        timer = false
        process(text, socket)
      }, 2)
  })
})

const process = (text, socket) => {

  var req = create_req(text);
  var res = create_resp(socket);

  fs.exists(path.join(__dirname + req.path), function(exists)
  {
    if (exists)
    {
      // static file routes
      res.status(200);
      res.sendFile(path.join(__dirname + req.path));
    }
    else
    {
      //console.log(routes.tokens);
      var route = routes[req.method].reverse().find(route => route.regexp.test(req.path))
      if (route)
      {
        var matches = req.path.match(route.regexp)

          route.tokens.forEach((token, i) => {
            req.params[token] = matches[i + 1]
          })
          if (route) {
            // var section;
            //
            // sections = req.body.split("&");
            // sections.forEach((element) => {
            //   var keyValue = element.split("=");
            //   req[keyValue[0]] = keyValue[1];
            // });
            route.handler(req, res);

            if (!res.sent())
              res.closes()
          }
        }
      else
      {
        res.status(404);
        res = responses.create_res_err(res, req);
        res.sends(CODES[404]);
      }
    }
  });
}

module.exports = {
  addRoute: function(method, path, handler) {
    if (routes[method] === undefined)
      routes[method] = []

    var tokens = path.split('/')
                     .filter(part => part[0] === ':')
                     .map(part => part.substr(1));

    var expr  = path.split('/')
                    .map(part => part[0] === ':' ? '(.*)' : part)
                    .join('/')

     routes[method].push({
       path,
       handler,
       regexp : new RegExp(`^${expr}$`, 'i'),
       tokens
     })
   },

  listen: function(port) {
    server.listen(port);
  }
}
