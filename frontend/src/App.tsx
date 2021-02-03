import React from "react";
import { useSelector } from "react-redux";

import { getTopTenPlayers } from "./redux/scores";
import "./App.css";

const App = () => {
  const topTenPlayers = useSelector(getTopTenPlayers);
  console.log(topTenPlayers);
  return <div className="App">testing</div>;
};

export default App;
