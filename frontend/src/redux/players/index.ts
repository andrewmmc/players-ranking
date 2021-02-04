import {
  INIT_PLAYERS,
  UPDATE_PLAYER,
  PlayersState,
  UpdatePlayerAction,
  ActionTypes,
  InitPlayersAction,
} from "./types";

// action creators
export const initPlayers = (data: PlayersState): InitPlayersAction => ({
  type: INIT_PLAYERS,
  data,
});

export const updatePlayer = (
  playerId: string,
  name: string,
  score: number
): UpdatePlayerAction => ({
  type: UPDATE_PLAYER,
  playerId,
  name,
  score,
});

// selectors
export const getTopTenPlayers = (state: PlayersState) =>
  Object.entries(state.players)
    .sort(([, a], [, b]) => b.score - a.score)
    .slice(0, 10);

// reducers
const initState: PlayersState = {};

export const playersReducer = (
  state: PlayersState = initState,
  action: ActionTypes
): PlayersState => {
  switch (action.type) {
    case INIT_PLAYERS: {
      const { data } = action;
      return {
        ...state,
        ...data,
      };
    }
    case UPDATE_PLAYER: {
      const { playerId, name, score } = action;
      return {
        ...state,
        [playerId]: { name, score },
      };
    }
    default:
      return state;
  }
};

export default playersReducer;
