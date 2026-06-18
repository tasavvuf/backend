const console = require("console");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

app.get("/", (_, res) => {
  res.send("server is running yes");
});
io.on("connection", (socket) => {
  console.log("user connected user id: ", socket.id);

  socket.on("message", (data) => {
    console.log(data);

    socket.emit("receive_message", {
      text: "server gets your message " + data.text,
      timestamp: new Date().toLocaleTimeString(),
    });
  });
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
