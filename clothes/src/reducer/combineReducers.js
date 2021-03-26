import { combineReducers } from 'redux';
import weatherReducer from './weather';
import timeReducer from './time';

const rootReducer = combineReducers({
  weatherReducer,
  timeReducer
});

export default rootReducer;