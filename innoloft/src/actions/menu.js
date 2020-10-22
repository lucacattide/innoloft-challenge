// Module Start
// JS imports
import { createAction } from '@reduxjs/toolkit';

// Actions
// Menu setter
const setActive = createAction('menu/setActive',
function prepare(active) {
  return {
    payload: {
      active
    }
  };
});

// Module export
export {
  setActive
};
// Module End
