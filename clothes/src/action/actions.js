import { ADD, REMOVE } from './actionTypes';

export const cityAdd = ({city}) => ({type: ADD, city});
export const cityRemove = ({city}) => ({type: REMOVE, city});
