/* eslint-disable no-console */
require("dotenv").config();
const WebSocket = require("ws");

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
  port: process.env.PORT || "3000",
});

console.log(
  `Server started. Visit ws://localhost:${process.env.PORT || "3000"}`
);

// Mock data - to keep it sample, in-memory list is used here for storing players
const players = {
  "ec82ae68-1335-4208-94ab-2792502135f2": { name: "Mary", score: 20 },
  "14f37bef-71a7-4b0d-b93b-39a6540a33ec": { name: "Peter", score: 48 },
  "961a63c1-7f3c-472e-8a4e-9272bef8712c": { name: "Tom", score: 30 },
  "46b111c2-17f8-4380-9fb4-750c50735787": { name: "Jason", score: 23 },
  "54de9f00-644d-4c76-b482-79672c4aa304": { name: "Alex", score: 40 },
  "049d5872-1677-43a9-8241-9dabd906b409": { name: "Teddy", score: 44 },
  "86d8d829-4f02-414e-9ba3-0b15ac1d878f": { name: "Andrew", score: 90 },
  "376f01b2-f613-47c9-b222-0a3545c36f41": { name: "Ken", score: 87 },
  "9cbe7899-f841-479d-abeb-15961ba287ab": { name: "Danny", score: 47 },
  "d9538a03-e9e8-4a5b-b0fe-936789b08407": { name: "Jenny", score: 29 },
};

console.log(`Existing hard-coded players:`);
console.log(players);

// messages type
const INIT_PLAYERS = "INIT_PLAYERS";
const UPDATE_PLAYER = "UPDATE_PLAYER";

wss.on("connection", (ws) => {
  const { clients } = wss;

  // send players data when connection created for init
  const initAction = { type: INIT_PLAYERS, data: players };
  ws.send(JSON.stringify(initAction));

  ws.on("message", (data) => {
    clients.forEach((client) => {
      try {
        const action = JSON.parse(data);
        if (typeof action === "object" && action !== null) {
          const { type, playerId, name, score } = action;
          if (type === UPDATE_PLAYER && playerId && name && score) {
            // update in-memory record for init
            // to keep it simple, no higher score checking is implemented here
            players[playerId] = { name, score };

            console.log(`Received player update:`);
            console.log({ playerId, name, score });

            // boardcast score update to every connections
            // for better performance, could consider only sending update related to top 10 players if needed
            client.send(data);
          }
        }
      } catch (err) {
        console.error(`Invalid socket message - ${err}`);
      }
    });
  });

  ws.on("close", () => {
    console.log("Connection closed.");
  });
});
