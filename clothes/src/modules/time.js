import { GET_TIME } from '../actions/actionTypes';

const initTime = new Date();
const timeObj = {
  time: {
    hour: initTime.getHours(),
    minute: initTime.getMinutes()
  }
};

const timeReducer = (state = timeObj, action) => {
  switch (action.type) {
  case GET_TIME:
    return {
      ...state,
      time: {
        hour: action.now.hour,
        minute: action.now.minute
      }
    }
  default:
    return state;
  }
};

export default timeReducer;