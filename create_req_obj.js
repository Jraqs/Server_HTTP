
function create_requ_obj(data)
{
  var request = {body: "", qstring: {}, header: {},
  params: {}, method: "", path: "", message: ""};

  request.toString = function() {
    return `
    ===========================================

    ${data}

    -------------------------------------------

    ${request.method} ${request.path}`
  }



  var parts;
  var header_lines;
  var first_line;
  var data_sent;
  var i;
  var j;

  j = 0;
  i = 1;
  parts = data.toString().split('\r\n\r\n');
  request.body =  parts[1] || "";
  header_lines = parts[0].toString().split('\n');
  first_line = header_lines[0].toString().split(' ');
  request.method = first_line[0];
  request.path = first_line[1];

  if (request.path.indexOf("?") != -1)
    {
      var sp = request.path.split('?', 1)

      request.path = sp.shift()
      request.qstring  = sp.shift()
    }
  while (header_lines[i] != null)
    {
      request.header[header_lines[i].substring(0, header_lines[i].indexOf(":")).toLowerCase()] =
      header_lines[i].substring(header_lines[i].indexOf(" ") + 1, header_lines[i].length);
      i++;
    }
    return (request)
}

module.exports = create_requ_obj;
