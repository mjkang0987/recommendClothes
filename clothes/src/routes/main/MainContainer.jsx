import MainPresenter from './MainPresenter';
import { fetchData } from '../../action/fetch';
import { API } from '../../constants/constants';
import { createContext } from 'react';

const {getData} = fetchData;
const {URL, KEY} = API;

const data = async _ => {
  return await getData({url: `${URL}?q=seoul${KEY}`});
};

const test = data();

const MainContainer = _ => {
console.log(test);
  return (
    <MainPresenter/>
  );
};

export default MainContainer;
