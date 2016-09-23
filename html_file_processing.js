var fs = require('fs');
var path = require("path");
var responses = require('./responses.js')

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

function   verify_file(pat, response, request, send_socket)
{
  var      resbody;

  fs.exists(path.join(__dirname + pat), function(exists)
    {
      if (exists)
      {
        resbody = fs.readFileSync(path.join(__dirname + pat));
        response = responses.create_res_200(request.header);
        send_socket(response, resbody);
      }
      else
      {
        resbody = `<HTML>
        <H1>ERROR 404</H1>
        <P>Page not found</P>
         </HTML>`
        response = responses.create_res_400(request.header);
        send_socket(response, resbody);
      }
});
}

exports.parse_file = parse_file;
exports.verify_file = verify_file;
