const { Socket } = require('net');
// For reading the interface
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const END = 'END';

const socket = new Socket();

socket.connect({ host: 'localhost', port: 8000 });
socket.setEncoding('utf-8'); // Deco Buffer

readline.on('line', (message) => {
	socket.write(message);
	if(message === END) {
		socket.end();
	}
});

socket.on('data', (data) => {
	console.log(data);
});

socket.on('close', () => process.exit(0));