var fs = require('fs');
var path = require('path')
var mime = require('mime');
var CODES = require('./codes.js')
var cap = require('./capitalize')

function  create_res_err(res, req)
{
  var date;
  var today;

  date = new Date();
  today = date.toGMTString();
  res.header('content-type', "text/html");
  res.header('connection', "keep-alive");
  res.header('date', date);
  return (res);
}

exports.create_res_err = create_res_err;
