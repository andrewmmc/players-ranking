import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { getTopTenPlayers } from "./redux/players";

const App = () => {
  const topTenPlayers = useSelector(getTopTenPlayers) || [];
  return (
    <Container>
      <Center h="100vh">
        <Table variant="simple">
          <TableCaption>Real time leaderboard</TableCaption>
          <Thead>
            <Tr>
              <Th># Rank</Th>
              <Th>Name</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {topTenPlayers.length > 0 ? (
              topTenPlayers.map(([playerId, player], index) => {
                const { name, score } = player;
                return (
                  <Tr key={playerId}>
                    <Td>{index + 1}</Td>
                    <Td>{name}</Td>
                    <Td isNumeric>{score}</Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td />
                <Td>No players available.</Td>
                <Td />
              </Tr>
            )}
          </Tbody>
        </Table>
      </Center>
    </Container>
  );
};

export default App;
