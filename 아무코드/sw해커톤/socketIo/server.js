const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);


server.listen(8080, () => {
  console.log('listening on *:3000');
});

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})


io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    //   io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
        io.emit('chat message',msg)
    });

    // 모든 사람에게
  });

  