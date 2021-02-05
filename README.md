# players-ranking

Simple React and Node.js WebSocket applications for showing top players.

React application is written in TypeScript and Node.js application is written in JavaScript.

Developed and tested under Node.js v12.16.1.

## Install
1. Clone this repository to get started. Run the following commands to install dependencies on both frontend and backend applications.

```bash
$ cd backend && yarn && cd ../
$ cd frontend && yarn && cd ../
```

## Run locally
1. Please run the backend application first to kickstart the WebSocket service.
```bash
$ cd backend && yarn start
```
2. After started the backend application, you will see a `Server started.` message. After that, you may start the frontend application.
```bash
$ cd frontend && yarn start
```

## Config
Config are stored in `backend/.env` and `frontend/.env`. Normally no changes are required.

## How to use
When you go to the frontend application, an websocket connection is created between client and server. To keep the implementation simple, players scores are only scored in memory.

Players data will be boardcasted to client once connection is created.

To update specific player's score, you may send the following data **in string** under websocket protocol to `ws://localhost:3000`.

```
{"type":"UPDATE_PLAYER","playerId":"ec82ae68-1335-4208-94ab-2792502135f2","name":"Mary","score":80}
```

No higher score checking is implemented on backend side, meaning the scoring data will directly being repalced the existing player one, or added if the current one does not exist. `playerId` is the unique ID for identifying different players.

## Run test
Tests are included in the frontend application (as we're focusing on frontend application). To run those, please use the following command:
```bash
$ cd frontend && yarn test
```

## Author
* Andrew Mok, 2021
* Feel free to contact me via email.
