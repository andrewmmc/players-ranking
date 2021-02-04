import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initPlayers, updatePlayer } from "../redux/players";
import { INIT_PLAYERS, UPDATE_PLAYER } from "../redux/players/types";

const WebSocketConnector = () => {
  const dispatch = useDispatch();
  const socket = new WebSocket(
    process.env.REACT_APP_WEBSOCKET_HOST || "ws://localhost:3000"
  );

  useEffect(() => {
    // Listen for messages
    socket.addEventListener("message", ({ data }) => {
      try {
        const action = JSON.parse(data);
        if (typeof action === "object" && action !== null) {
          switch (action.type) {
            case INIT_PLAYERS: {
              dispatch(initPlayers(action.data));
              break;
            }
            case UPDATE_PLAYER: {
              dispatch(
                updatePlayer(action.playerId, action.name, action.score)
              );
              break;
            }
            default: {
              break;
            }
          }
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Invalid socket message - ${err}`);
      }
    });
  }, []);

  return null;
};

export default WebSocketConnector;
