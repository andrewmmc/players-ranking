import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { getTopTenPlayers, initPlayers, updatePlayer } from "../redux/players";
import {
  INIT_PLAYERS,
  UPDATE_PLAYER,
  ActionTypes,
} from "../redux/players/types";
import webSocketService from "../utils/webSocketService";

export const handleSocketMessage = (dispatch: Dispatch) => (
  action: ActionTypes
) => {
  switch (action.type) {
    case INIT_PLAYERS: {
      dispatch(initPlayers(action.data));
      break;
    }
    case UPDATE_PLAYER: {
      dispatch(updatePlayer(action.playerId, action.name, action.score));
      break;
    }
    default: {
      break;
    }
  }
};

const Leaderboard = () => {
  const dispatch = useDispatch();
  const topTenPlayers = useSelector(getTopTenPlayers) || [];

  useEffect(() => {
    webSocketService.onReceive(handleSocketMessage(dispatch));
  }, []);

  return (
    <Table variant="simple">
      <TableCaption>Real time leaderboard</TableCaption>
      <Thead role="rowheader">
        <Tr>
          <Th># Rank</Th>
          <Th>Name</Th>
          <Th isNumeric>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
        {topTenPlayers.length > 0 ? (
          topTenPlayers.map(([playerId, player]) => {
            const { name, score, rank } = player;
            return (
              <Tr key={playerId} role="row">
                <Td>{rank}</Td>
                <Td>{name}</Td>
                <Td isNumeric>{score}</Td>
              </Tr>
            );
          })
        ) : (
          <Tr role="row">
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
