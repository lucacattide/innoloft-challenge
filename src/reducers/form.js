// Module Start
// JS imports
import { createReducer } from '@reduxjs/toolkit';
import {
  setEdit,
  setData,
  setStrength,
  setException,
  setNotification
} from '../actions/form';

// State initialization
const initState = {
  edit: false,
  data: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
    street: '',
    number: 0,
    zip: 0,
    country: ''
  },
  strength: 'weak',
  exception: {
    'email': {
      error: false,
      message: ''
    },
    'firstName': {
      error: false,
      message: ''
    },
    'lastName': {
      error: false,
      message: ''
    },
    'password': {
      error: false,
      message: ''
    },
    'passwordConfirm': {
      error: false,
      message: ''
    },
    'street': {
      error: false,
      message: ''
    },
    'number': {
      error: false,
      message: ''
    },
    'zip': {
      error: false,
      message: ''
    },
    'country': {
      error: false,
      message: ''
    }
  },
  notification: ''
};
// Form state reducer
const form = createReducer(initState, {
  [setEdit.type]: (state, action) => {
    const {edit} = action.payload;

    state.edit = edit;
  },
  [setData.type]: (state, action) => {
    const {data} = action.payload;

    state.data.email = data.email;
    state.data.password = data.password;
    state.data.passwordConfirm = data.passwordConfirm;
    state.data.firstName = data.firstName;
    state.data.lastName = data.lastName;
    state.data.street = data.street;
    state.data.number = data.number;
    state.data.zip = data.zip;
    state.data.country = data.country;
  },
  [setStrength.type]: (state, action) => {
    const {strength} = action.payload;

    state.strength = strength;
  },
  [setException.type]: (state, action) => {
    const {id, error} = action.payload;

    state.exception[id] = error;
  },
  [setNotification.type]: (state, action) => {
    const {notification} = action.payload;

    state.notification = notification;
  }
});

// Module export
export default form;
// Module End
