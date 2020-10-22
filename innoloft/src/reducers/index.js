// Module Start
// JS imports
import { combineReducers } from 'redux';
import menu from './menu';
import profile from './profile';
import form from './form';

// Reducers
// Module export
const appReducer = combineReducers({
  menu: menu,
  profile: profile,
  form: form
});

// Module export
export default appReducer;
// Module End
