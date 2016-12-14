var path = require('path');
var file = require ('./html_file_processing');
var fs = require('fs');
var cap = require('./capitalize');
var CODES = require('./codes.js');
var mime = require('mime');

function create_resp_obj(socket)
 {
  var response = {header: [], body: "", status: 201},
      _sent = false;

  const priv = {
    sent: () => _sent,

    write: body => {
      response.body += body;
    },

    closes: () => {
      if (_sent)
        return

      _sent = true

      priv.header('connection', "keep-alive");
      priv.header('date', new Date().toGMTString());

    //  console.log(priv.toString())
    //  console.log()
      socket.write(priv.toString())
      socket.end()
    },

    status: code => (response.status = code),

    header: (name, value) => {
      response.header[name] = value
    },

    toString: () => {
      const headers = Object.keys(response.header)
                            .map(key => `${cap.capitalizeEachWord(key)}: ${response.header[key]}`)
                            .join('\n')
      return (`HTTP/1.1 ${response.status} ${CODES[response.status]}
${headers}

${response.body}
    `)},

    sends: data => {
      priv.write(data);
      priv.closes();
    },

    sendJSON: data => {
      data = JSON.stringify(data);

      priv.header('content-type', 'application/json');
      priv.header('content-length', data.length);
      priv.sends(data);
    },

    sendFile: path => {
      var date;
      var file_type;
      var today;
      var stats

      stats = fs.statSync(path);
      date = new Date();
      today = date.toGMTString();
      file_type = mime.lookup(path);
      priv.header('content-type', file_type);
      priv.header('content-length', stats["size"]);
      priv.sends(fs.readFileSync(path, 'binary'));
    }
  }
  return priv;
}

module.exports = create_resp_obj;
