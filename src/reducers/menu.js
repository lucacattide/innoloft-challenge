// Module Start
// JS imports
import { createReducer } from '@reduxjs/toolkit';
import { setActive } from '../actions/menu';

// State initialization
const initState = {
  active: false,
};
// Menu state reducer
const menu = createReducer(initState, {
  [setActive.type]: (state, action) => {
    const { active } = action.payload;

    state.active = active;
  },
});

// Module export
export default menu;
// Module End
