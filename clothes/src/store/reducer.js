import * as types from './actionTypes';
import { INITIAL_CITY } from '../constants/constants';

const reducer = (state = INITIAL_CITY, action) => {
  switch (action.type) {
  case types.UPDATE:
    console.log(state.current)
    return {
      ...state,
      current: action.current
    };
  default:
    return state;
  }
};

export default reducer;