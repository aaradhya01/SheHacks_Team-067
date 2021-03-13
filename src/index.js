import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="73b7b723-3578-42dc-9f49-ac9564451c33" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
