import React from "react";
import ReactDOM from "react-dom/client";
//provides dom specific methods in react app

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
//this provider component makes redux store available for any nested component
//redux manages application state

import { createStore, applyMiddleware, compose } from "redux";
//state management library , creating redux store for our app

import thunk from "redux-thunk";
//to manage asynchronous actions and promises

import reportWebVitals from "./reportWebVitals";
//to measure the performance of your app

import Reducers from "./reducers";
//danger
const store = createStore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

//Through this function, all the content of app.js will be rendered in the index.html file.

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
