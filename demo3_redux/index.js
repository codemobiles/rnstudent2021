/**
 * @format
 */

 import React from 'react';

// Redux Begin
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
// Redux End


import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


const store = createStore(reducers, applyMiddleware(logger, thunk));
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
