import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
// import MemoStore from "./memo/Store";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

let state_value = {
  counter: 0,
  message: "COUNTER",
};

function counter(state = state_value, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        message: "INCREMENT",
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        message: "DECREMENT",
      };

    case "RESET":
      return {
        counter: 0,
        message: "RESET",
      };
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const tersistReducer = persistReducer(persistConfig, counter);
let store = createStore(tersistReducer);
let pstore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
