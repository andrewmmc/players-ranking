import { combineReducers } from "redux";
import playersReducer from "./players"; // eslint-disable-line import/no-named-as-default
import scoresReducer from "./scores"; // eslint-disable-line import/no-named-as-default

const rootReducer = combineReducers({
  players: playersReducer,
  scores: scoresReducer,
});

export default rootReducer;
