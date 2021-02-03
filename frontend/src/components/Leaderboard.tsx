import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { getTopTenPlayers } from "../redux/players";

const Leaderboard = () => {
  const topTenPlayers = useSelector(getTopTenPlayers) || [];
  return (
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
  );
};

export default Leaderboard;
