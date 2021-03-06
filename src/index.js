import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'antd/dist/antd.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {searchLaptops , onItemClick} from './reducer'


const logger = createLogger();
const rootReducer = combineReducers({ searchLaptops , onItemClick })

const store = createStore(rootReducer ,applyMiddleware(thunkMiddleware , logger) );

const app = (
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
</React.StrictMode>
</BrowserRouter>
)


ReactDOM.render(
  app ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
