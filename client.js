const { Socket } = require('net');
const socket = new Socket();

socket.connect({ host: 'localhost', port: 8000 });
socket.setEncoding('utf-8'); // Deco Buffer
socket.write('hello');
socket.on('data', (data) => {
	console.log(data);
});