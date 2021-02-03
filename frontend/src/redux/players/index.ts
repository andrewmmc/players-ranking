import {
  UPDATE_PLAYER,
  PlayersState,
  UpdatePlayerAction,
  ActionTypes,
} from "./types";

// action creators
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
const initState: PlayersState = {
  // mock data
  "ec82ae68-1335-4208-94ab-2792502135f2": { name: "Mary", score: 20 },
  "14f37bef-71a7-4b0d-b93b-39a6540a33ec": { name: "Peter", score: 48 },
  "961a63c1-7f3c-472e-8a4e-9272bef8712c": { name: "Tom", score: 30 },
  "46b111c2-17f8-4380-9fb4-750c50735787": { name: "Jason", score: 23 },
  "54de9f00-644d-4c76-b482-79672c4aa304": { name: "Alex", score: 40 },
  "049d5872-1677-43a9-8241-9dabd906b409": { name: "Teddy", score: 44 },
  "86d8d829-4f02-414e-9ba3-0b15ac1d878f": { name: "Andrew", score: 90 },
  "376f01b2-f613-47c9-b222-0a3545c36f41": { name: "Ken", score: 87 },
  "9cbe7899-f841-479d-abeb-15961ba287ab": { name: "Danny", score: 47 },
  "d9538a03-e9e8-4a5b-b0fe-936789b08407": { name: "Jenny", score: 30 },
};

export const playersReducer = (
  state: PlayersState = initState,
  action: ActionTypes
): PlayersState => {
  switch (action.type) {
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
