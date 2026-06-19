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
    console.log("Connected:", socket.id)

    socket.on("locationGet", (data) => {
        console.log(`Location from ${socket.id}:`, data)
        
        io.emit("BroadcastingLocationData", {
            id: socket.id,
            lat: data.lat,
            log: data.log,
            timestamp: new Date().toLocaleTimeString()
        })
    })

    socket.on("disconnect", () => {
        // Tell everyone this user disconnected
        io.emit("user_disconnected", { id: socket.id })
        console.log("Disconnected:", socket.id)
    })
})
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
