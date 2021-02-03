import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./redux/store";
import App from "./App";
import WebSocketWrapper from "./components/WebSocketWrapper";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider>
        <WebSocketWrapper>
          <App />
        </WebSocketWrapper>
      </ChakraProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
