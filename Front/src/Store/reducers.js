// reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import profilReducer from './profilReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  profil: profilReducer,
});

export default rootReducer;
