const { Server } = require('net');
const server = new Server();

// This give me a socket
server.on('connection', (socket) => {
	console.log(`New connection from ${socket.remoteAddress}:${socket.remotePort}`); // V4 - new connection
	socket.setEncoding('utf-8'); // Deco Buffer
	socket.on('data', (data) => {
		socket.write(data);
	});
});

server.listen({ port: 8000, host: '0.0.0.0' }, () => {
	console.log('Listening on port 8000');
});