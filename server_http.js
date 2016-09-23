var net = require('net');
var responses = require('./responses.js')
var fs = require('fs');
var path = require("path");
var file = require ('./html_file_processing')
var pars = require("./parsing.js")

var server = net.createServer(function(socket) {
    socket.on('data', function(data)
    {
        var response = {};
        var pat;
        var request;

        request = pars.parse_req(data);
        pat = file.parse_file(request.header);
        file.verify_file(pat, response, request,function(response, body){
            var string = [response.header, body].join('\r\n\r\n');
            socket.write(string + '\r\n');
            socket.end();
          });
    })
});
server.listen(5000);
