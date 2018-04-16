let SerialPort = require('serialport');
let port = new SerialPort("COM1");

port.on('open', function() {
    port.write('main screen turn on ', function(err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    });
});
//打开错误将会发出一个错误事件
port.on('error', function(err) {
    console.log('Error: ', err.message);
});
port.on('data', data => {
    console.log('listening...');
})