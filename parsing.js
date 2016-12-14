function  parse_req(data_s)
{
  var     requ = {header: {}, body: {}};

  requ.header = parts[0];
  requ.body = parts[1] || "";
  return (requ);
}

exports.parse_req = parse_req;
