import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./redux/store";
import App from "./App";
import WebSocketConnector from "./components/WebSocketConnector";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <App />
        <WebSocketConnector />
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
