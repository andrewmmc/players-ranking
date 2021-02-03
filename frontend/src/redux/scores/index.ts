import {
  UPDATE_PLAYER_SCORE,
  ScoresState,
  UpdateScoreAction,
  ActionTypes,
} from "./types";

// action creators
export const updateScore = (
  playerId: string,
  score: number
): UpdateScoreAction => ({
  type: UPDATE_PLAYER_SCORE,
  playerId,
  score,
});

// selectors
export const getTopTenPlayers = (state: ScoresState) =>
  Object.entries(state.scores).sort(([, a], [, b]) => b - a);

// reducers
const initState: ScoresState = {
  // mock data
  "ec82ae68-1335-4208-94ab-2792502135f2": 34,
  "14f37bef-71a7-4b0d-b93b-39a6540a33ec": 20,
  "961a63c1-7f3c-472e-8a4e-9272bef8712c": 48,
  "46b111c2-17f8-4380-9fb4-750c50735787": 52,
  "54de9f00-644d-4c76-b482-79672c4aa304": 50,
  "049d5872-1677-43a9-8241-9dabd906b409": 12,
  "86d8d829-4f02-414e-9ba3-0b15ac1d878f": 23,
  "376f01b2-f613-47c9-b222-0a3545c36f41": 77,
  "9cbe7899-f841-479d-abeb-15961ba287ab": 55,
  "d9538a03-e9e8-4a5b-b0fe-936789b08407": 86,
};

export const scoresReducer = (
  state: ScoresState = initState,
  action: ActionTypes
): ScoresState => {
  switch (action.type) {
    case UPDATE_PLAYER_SCORE: {
      const { playerId, score } = action;
      return {
        ...state,
        [playerId]: score,
      };
    }
    default:
      return state;
  }
};

export default scoresReducer;
