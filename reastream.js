const dgram = require('node:dgram');
const prototypes = require('./core/prototypes');

prototypes();

const server = dgram.createSocket('udp4');

server.on('connect', () => {
    console.log("New connection to UDP4 server!");
})
server.on('listening', () => {
    console.log("ASIO4Discord v1.0 Loaded!");
})

server.on('message', (msg, rinfo) => {

});

server.bind(58710);