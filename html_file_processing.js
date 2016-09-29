var fs = require('fs');
var path = require("path");
var responses = require('./responses.js')
var webp = require('./html_errors.js')

function  parse_file(headers)
{
  var     lines;
  var     pat;
  var     i;
  var     j;

  i = 0;
  j = 0;
  lines = headers.toString().split('\r\n');
  pat = lines[0].toString().split(' ');
  return (pat[1]);
}

function   verify_send_file(pat, response, request, send_socket)
{
  var      resbody;
  var      code_status;

  code_status = 0;
  fs.exists(path.join(__dirname + pat), function(exists)
    {
      if (exists)
      {
        if (pat[pat.length - 1] == '/')
          code_status = 403;
        if (code_status.toString()[0] == '4' || code_status.toString()[0] == '5')
          {
            resbody = webp[code_status];
            response = responses.create_res_err(pat, code_status);
            send_socket(response, resbody);
            return (0)
          }
        code_status = 200;
        resbody = fs.readFileSync(path.join(__dirname + pat));
        response = responses.create_res(pat, code_status);
        send_socket(response, resbody);
      }
      else
      {
        code_status = 404;
        resbody = webp[code_status];
        response = responses.create_res_err(pat, code_status);
        send_socket(response, resbody);
      }
    });
}

exports.parse_file = parse_file;
exports.verify_send_file = verify_send_file;
