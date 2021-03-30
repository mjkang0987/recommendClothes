import { GET_TIME } from '../actions/actionTypes';
import { INITIAL_TIME } from '../constants/constants';

const timeReducer = (state = INITIAL_TIME, action) => {
  switch (action.type) {
  case GET_TIME:
    return {
      time: {
        ...state,
        hour: action.now.time.hour,
        minute: action.now.time.minute
      }
    }
  default:
    return state;
  }
};

export default timeReducer;