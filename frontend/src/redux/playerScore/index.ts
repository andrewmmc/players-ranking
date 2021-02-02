import {
  UPDATE_PLAYER_SCORE,
  PlayerScoreState,
  UpdateScoreAction,
  ActionTypes,
} from "./types";

// action creators
export const updateScore = (
  player: string,
  score: number
): UpdateScoreAction => ({
  type: UPDATE_PLAYER_SCORE,
  player,
  score,
});

// selectors

// reducers

const initState: PlayerScoreState = {};

export const playerScoreReducer = (
  state: PlayerScoreState = initState,
  action: ActionTypes
): PlayerScoreState => {
  switch (action.type) {
    case UPDATE_PLAYER_SCORE: {
      return state;
    }
    default:
      return state;
  }
};

export default playerScoreReducer;
