const WebSocket = require("ws");
const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
  port: 3000,
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    let clients = wss.clients;

    clients.forEach((client) => {
      client.send(data);
    });
  });

  ws.on("close", () => {
    console.log("Close connected");
  });
});
