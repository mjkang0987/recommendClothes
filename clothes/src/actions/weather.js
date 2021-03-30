import { GET, ADD, REMOVE } from './actionTypes';

export const getCity = ({weather}) => ({type: GET, weather});
export const addCity = _ => ({type: ADD});
export const removeCity = _ => ({type: REMOVE});