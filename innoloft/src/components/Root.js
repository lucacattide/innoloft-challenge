// Module Start
// JS imports
import React from 'react';
import { Provider } from 'react-redux';
import {
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import appReducer from '../reducers/index';
import App from './App';
import Menu from './Menu';
import Profile from './Profile';

// App store instantiation
const store = configureStore({
  reducer: appReducer,
  middleware: [
    ...getDefaultMiddleware()
  ]
});
// Root
const Root = () => {
  return (
    <Provider store={store}>
      <App>
        <Menu />
        <Profile />
      </App>
    </Provider>
  );
};

// Module export
export default Root;
// Module End
