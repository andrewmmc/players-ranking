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
    .slice(0, 10)
    .map((item, index, array) => {
      const [, player] = item;
      if (index > 0) {
        const [, prevPlayer] = array[index - 1];
        if (prevPlayer.score === player.score) {
          player.rank = prevPlayer.rank;
        } else {
          player.rank = index + 1;
        }
      } else {
        player.rank = 1;
      }
      return item;
    });

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
