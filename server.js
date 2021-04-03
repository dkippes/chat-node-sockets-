const { Server } = require('net');
const server = new Server();

const END = 'END';

// This give me a socket
server.on('connection', (socket) => {
	const remoteSocket = `${socket.remoteAddress}:${socket.remotePort}`;
	console.log(`New connection from ${remoteSocket}`); // V4 - new connection
	socket.setEncoding('utf-8'); // Deco Buffer
	socket.on('data', (message) => {
		if (message === END) {
			
			socket.end();
		} else {
			console.log(`${remoteSocket} -> ${message}`);
		}
	});

	socket.on('close', () => {
		console.log(`Connection with ${remoteSocket} closed`);
	});
});

server.listen({ port: 8000, host: '0.0.0.0' }, () => {
	console.log('Listening on port 8000');
});