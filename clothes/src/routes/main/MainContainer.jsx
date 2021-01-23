import { useContext } from 'react';
import { Weather } from '../../App';
import MainPresenter from './MainPresenter';
import { CLOTHING, TIME_TEXT } from '../../constants/constants';

const MainContainer = _ => {
  const value = useContext(Weather);
  const {TEMPS} = value.weather;
  const {hour} = value.time;
  const {NOW} = TEMPS;

  const timeType = TIME_TEXT[Object.keys(TIME_TEXT).map(Number).find(t => hour <= t)];
  const tempClothes = Object.keys(CLOTHING).map(Number).find(c => NOW <= c);

  const clothing = {
    term: CLOTHING[tempClothes].TERM,
    temp: CLOTHING[tempClothes].TEMP,
    clothes: CLOTHING[tempClothes].CLOTHES
  };

  return (
    <MainPresenter
      clothing={clothing}
      timeType={timeType}/>
  );
};

export default MainContainer;
