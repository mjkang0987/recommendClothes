import { ADD, REMOVE, GET } from '../action/actionTypes';
import { INITIAL_CITY } from '../constants/constants';

const reducer = (state = INITIAL_CITY, action) => {
  switch (action.type) {
  case types.ADD:
    console.log(state.city)
    return {
      ...state,
      cities: [...state.cities, action.city]
    };
  case types.REMOVE:
    console.log(state.city);
    return {
      ...state,
      cities: [...state.cities, action.city]
    }
  default:
    return state;
  }
};

export default reducer;