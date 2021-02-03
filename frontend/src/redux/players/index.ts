import {
  UPDATE_PLAYER,
  PlayersState,
  UpdatePlayerAction,
  ActionTypes,
} from "./types";

// action creators
export const updatePlayer = (
  playerId: string,
  name: string
): UpdatePlayerAction => ({
  type: UPDATE_PLAYER,
  playerId,
  name,
});

// selectors

// reducers
const initState: PlayersState = {
  // mock data
  "ec82ae68-1335-4208-94ab-2792502135f2": "Mary",
  "14f37bef-71a7-4b0d-b93b-39a6540a33ec": "Peter",
  "961a63c1-7f3c-472e-8a4e-9272bef8712c": "Tom",
  "46b111c2-17f8-4380-9fb4-750c50735787": "Jason",
  "54de9f00-644d-4c76-b482-79672c4aa304": "Alex",
  "049d5872-1677-43a9-8241-9dabd906b409": "Teddy",
  "86d8d829-4f02-414e-9ba3-0b15ac1d878f": "Andrew",
  "376f01b2-f613-47c9-b222-0a3545c36f41": "Ken",
  "9cbe7899-f841-479d-abeb-15961ba287ab": "Danny",
  "d9538a03-e9e8-4a5b-b0fe-936789b08407": "Jenny",
};

export const playersReducer = (
  state: PlayersState = initState,
  action: ActionTypes
): PlayersState => {
  switch (action.type) {
    case UPDATE_PLAYER: {
      const { playerId, name } = action;
      return {
        ...state,
        [playerId]: name,
      };
    }
    default:
      return state;
  }
};

export default playersReducer;
