import { combineReducers } from "redux";
import playerScoreReducer from "./playerScore"; // eslint-disable-line import/no-named-as-default

const rootReducer = combineReducers({
  playerScore: playerScoreReducer,
});

export default rootReducer;
