// Module Start
// JS imports
import { createAction } from '@reduxjs/toolkit';

// Actions
// Tabs setter
const setTabs = createAction('profile/setTabs', function prepare(tabs) {
  return {
    payload: {
      tabs,
    },
  };
});

// Module export
export { setTabs };
// Module End
