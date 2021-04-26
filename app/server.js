const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./chatMessage.js');



const app = express();
const port = 5000;
const server=http.createServer(app);
const io = socketio(server);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/front/chat.html');
});
















app.use(express.static(path.join(__dirname,'front')));
server.listen(port,()=>{
    console.log(`Chat Server listening to port ${port}...`);
});