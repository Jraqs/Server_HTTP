var file = require ('./html_file_processing');

var get_func = function(pat, response, request, socket)
{
  file.verify_send_file(pat, response, request, function(response, body, image)
  {
    var string = [response.full(), body].join('\r\n\r\n');
    return (string);
  });
}

methods = {
  //'POST': post_func(),
  'GET': get_func
  //'PUT': put_func(),
  //'DELETE': delete_func()
}

exports.methods = methods;
exports.get_func = get_func;
