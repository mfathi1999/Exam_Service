const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

io.use((socket,next)=>{
    const username = socket.handshake.auth.username;
    const password = socket.handshake.auth.password;
    
    if (username == "Mohammad" && password == "1234"){
        return next(new Error("valid UserPass"));
    }
    next();
});


const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);