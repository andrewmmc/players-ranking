import { combineReducers } from "redux";
import playersReducer from "./players"; // eslint-disable-line import/no-named-as-default

const rootReducer = combineReducers({
  players: playersReducer,
});

export default rootReducer;
