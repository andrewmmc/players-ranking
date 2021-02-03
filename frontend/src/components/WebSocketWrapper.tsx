import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// interface WebSocketWrapperProps {
//   children?: React.ReactNode;
// }

const WebSocketWrapper = ({ children }: any) => {
  const socket = new WebSocket("ws://localhost:3000");

  useEffect(() => {
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });
  }, []);

  return children;
};

export default WebSocketWrapper;
