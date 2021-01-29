import { INITIAL_CITY } from '../../constants/constants';

const ADD = 'city/ADD';
const REMOVE = 'city/REMOVE';
const UPDATE = 'city/UPDATE';

export const cityAdd = ({city}) => ({type: ADD, city});
export const cityRemove = ({city}) => ({type: REMOVE, city});
export const cityUpdate = ({city}) => ({type: UPDATE, city});

const cities = (state = INITIAL_CITY, action) => {
  switch (action.type) {
  case 'UPDATE':
    console.log(state)
    return {
      ...state,
      def: state.city
    };
  default:
    return state;
  }
};

export default cities;