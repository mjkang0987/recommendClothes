import { ADD, REMOVE, GET } from '../action/actionTypes';
import { INITIAL_CITY } from '../constants/constants';

const weatherReducer = (state = INITIAL_CITY, action) => {
  switch (action.type) {
  case ADD:
    console.log(state.city)
    return {
      ...state,
      cities: [...state.cities, action.city]
    };
  case REMOVE:
    console.log(state.city);
    return {
      ...state,
      cities: [...state.cities, action.city]
    };
  case GET:
    console.log(state.city);
    return {
      ...state,
      cities: [...state.cities, action.city]
    };
  default:
    return state;
  }
};

export default weatherReducer;