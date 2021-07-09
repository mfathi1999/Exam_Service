const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.use((socket,next)=>{
    const username = socket.handshake.auth.username;
    const password = socket.handshake.auth.password;
    
    console.log(username + password);
    // MongoAuth(username , password);
    next();
});


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);