import { GET, ADD, REMOVE } from '../actions/actionTypes';
import { INITIAL_INFO } from '../constants/constants';

const weatherReducer = (state = INITIAL_INFO, action) => {
  switch (action.type) {
  case GET:
    return {
      ...state,
      weather: {
        now: action.weather.now,
        min: action.weather.min,
        max: action.weather.max,
        desc: action.weather.desc,
        city: {
          current: action.weather.city.current,
          cities: [action.weather.city.current, ...state.weather.city.cities]
        }
      }
    }
  case ADD:
    return {
      ...state,
      CITY: {
        CURRENT: action.city.current,
        CITIES: [action.city.current, ...state]
      }
    }
  case REMOVE:
    return {
      ...state
    }
  default:
    return state;
  }
};

export default weatherReducer;