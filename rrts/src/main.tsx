import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";
import "./index.css";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
