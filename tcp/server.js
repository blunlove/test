let net = require('net');

let server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(data.toString());
    socket.write('你好');
  });
  socket.on('end', () => {
    console.log('断开连接');
  });
  socket.write('欢迎光临《深入浅出Node.js》示例：\n');
});
server.listen(8124, () => {
  console.log('server bound');
})