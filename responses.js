function  create_res_200(data)
{
  var response = {};
  var n;
  var date;
  var today;

  date = new Date();
  today = date.toGMTString();
  n = data.indexOf("HTTP/1.1")
  response.header = data.slice(n, n + 8);
  response.header = response.header.concat(" 200 OK\r\n");
  response.header = response.header.concat("Date: " + date + "\r\n");
  response.header = response.header.concat('Content-Type: text/html\r\nConnection: Closed\r\n');
  return (response);
}

function  create_res_400(data)
{
  var response = {};
  var n;
  var date;
  var today;

  date = new Date();
  today = date.toGMTString();
  n = data.indexOf("HTTP/1.1")
  response.header = data.slice(n, n + 8);
  response.header = response.header.concat(" 404 Not Found\r\n");
  response.header = response.header.concat("Date: " + date + "\r\n");
  response.header = response.header.concat('Content-Type: text/html\r\nConnection: Closed\r\n');
  return (response);
}


exports.create_res_200 = create_res_200;
exports.create_res_400 = create_res_400;
