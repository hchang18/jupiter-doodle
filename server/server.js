const express = require('express');
const socket = require('socket.io');


var app = express();

const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
const server = app.listen(server_port, () => {
    console.log("Started on: " + server_port);
});


app.use(express.static('../'));

var io = socket(server);

io.on('connection', (socket) => {
    console.log('user online : ' + socket.id);

    // if server receives some message, broadcast it
    socket.on('canvas-data', (data) => {
        console.log(data);
        socket.broadcast.emit('canvas-data', data);
        // io.sockets.emit('canvas-data', data);
    });
});

