var fs = require('fs');
var path = require('path')
var mime = require('mime');
var CODES = require('./codes.js')
var cap = require('./capitalize')
<<<<<<< HEAD

function  create_res_err(res, req)
{
=======

function  create_res(data, code_status)
{
  var response = {header: {}, full: "" };
  var n;
  var date;
  var file_type;
  var today;
  var stats

  stats = fs.statSync(path.join(__dirname + data));
  date = new Date();
  today = date.toGMTString();
  file_type = mime.lookup(data);
  response.header['content-type'] = file_type;
  response.header['connection'] = "keep-alive";
  response.header['date'] = date;
  response.header['content-length'] = stats["size"];
  response.full = function() {
    const headers = Object.keys(response.header)
                          .map(key => `${cap.capitalizeEachWord(key)}: ${response.header[key]}`)
                          .join('\n')
    return (`HTTP/1.1 ${code_status} ${CODES[code_status]}
${headers}
`)};
  return (response);
}

function  create_res_err(data, code_status)
{
  var response = {header: {}, full: ""};
  var n;
>>>>>>> cf0ca9116bc615096057d18c742d57d410254340
  var date;
  var today;

  date = new Date();
  today = date.toGMTString();
<<<<<<< HEAD
  res.header('content-type', "text/html");
  res.header('connection', "keep-alive");
  res.header('date', date);
  return (res);
}

=======
  response.header['content-type'] = "text/html";
  response.header['connection'] = "keep-alive";
  response.header['date'] = date;
  response.full = function() {
    const headers = Object.keys(response.header)
                          .map(key => `${cap.capitalizeEachWord(key)}: ${response.header[key]}`)
                          .join('\n')
    return (`HTTP/1.1 ${code_status} ${CODES[code_status]}
${headers}
`)};
  return (response);
}

exports.create_res = create_res;
>>>>>>> cf0ca9116bc615096057d18c742d57d410254340
exports.create_res_err = create_res_err;
