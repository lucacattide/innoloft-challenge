// Module Start
// JS imports
import { createReducer } from '@reduxjs/toolkit';
import {
  setTabs
} from '../actions/profile';

// State initialization
const initState = {
  tabs: {
    account: true,
    profile: false
  }
};
// Form state reducer
const form = createReducer(initState, {
  [setTabs.type]: (state, action) => {
    const {tabs} = action.payload;

    state.tabs = tabs;
  }
});

// Module export
export default form;
// Module End
