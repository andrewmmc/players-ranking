import React from "react";
import { Container, Center } from "@chakra-ui/react";
import Leaderboard from "./components/Leaderboard";

const App = () => (
  <Container>
    <Center h="100vh">
      <Leaderboard />
    </Center>
  </Container>
);

export default App;
