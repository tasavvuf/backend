const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("hello", () => {
    console.log("Hello received from client");
  });
  

  socket.on("user", (data) => {
    console.log(data);
  });

});
app.get("/", (req, res) => {
  res.send(`
    <h1>Socket Test</h1>

    <script src="/socket.io/socket.io.js"></script>

    <script>
      const socket = io();
      socket.emit("user",{ name : "tev",city : "rajkot"});
    </script>
  `);
});

server.listen(3000);