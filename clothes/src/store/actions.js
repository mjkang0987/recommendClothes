import * as types from './actionTypes';

export const cityAdd = ({city}) => ({type: types.ADD, city});
export const cityRemove = ({city}) => ({type: types.REMOVE, city});
export const cityUpdate = ({current}) => ({type: types.UPDATE, current});
