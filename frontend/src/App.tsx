import React from "react";
import { Container, Center } from "@chakra-ui/react";

import Leaderboard from "./components/Leaderboard";
import WebSocketConnector from "./components/WebSocketConnector";

const App = () => (
  <Container>
    <Center h="100vh">
      <Leaderboard />
      <WebSocketConnector />
    </Center>
  </Container>
);

export default App;
