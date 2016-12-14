const net = require('net');

const response = `HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Foo: bar

foobar
`

net.createServer(socket => {
  var timer = false, text = '';

  socket.on('data', buffer => {
    if (timer !== false) {
      clearTimeout(timer)
      timer = false
    }

    text += buffer.toString();

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = false

      // req is entirely sent
      process(socket, text)
    }, 1)
  })

}).listen(1025)


const process = (socket, buffer) => {
  console.log(buffer)

  socket.write(response)
  socket.end()
}
