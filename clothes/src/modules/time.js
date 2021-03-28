import { GET_TIME } from '../actions/actionTypes';

const initTime = new Date();
const time = {
  hour: initTime.getHours(),
  minute: initTime.getMinutes()
};

const timeReducer = (state = time, action) => {
  switch (action.type) {
  case GET_TIME:
    return {
      ...state,
      hour: action.now.hour,
      minute: action.now.minute
    }
  default:
    return state;
  }
};

export default timeReducer;