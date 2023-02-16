import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import {createStore,applyMiddleware,compose} from 'redux'

import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import Reducers from './reducers'
//danger
const store = createStore(Reducers,compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


reportWebVitals();
