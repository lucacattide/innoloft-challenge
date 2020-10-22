// Module Start
// JS imports
import { createAction } from '@reduxjs/toolkit';

// Actions
// Edit setter
const setEdit = createAction('form/setEdit',
function prepare(edit) {
  return {
    payload: {
      edit
    }
  };
});
// Data setter
const setData = createAction('form/setData',
function prepare(data) {
  return {
    payload: {
      data
    }
  };
});
// Password strength setter
const setStrength = createAction('form/setStrength',
function prepare(strength) {
  return {
    payload: {
      strength
    }
  };
});
// Exception setter
const setException = createAction('form/setException',
function prepare(id, error) {
  return {
    payload: {
      id,
      error
    }
  };
});
// Notification setter
const setNotification = createAction('form/setNotification',
function prepare(notification) {
  return {
    payload: {
      notification
    }
  };
});

// Module export
export {
  setEdit,
  setData,
  setStrength,
  setException,
  setNotification
};
// Module End
