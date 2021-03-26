import { useContext } from 'react';
import { Weather } from '../../App';
import Temp from '../../components/Main/Temp';
import Clothes from '../../components/Main/Clothes';
import { CLOTHING, TIME_TEXT } from '../../constants/constants';

const Main = _ => {
  const temps = useContext(Weather);
  const {TEMPS} = temps.weather;
  const {hour} = temps.time;
  const {NOW} = TEMPS;

  const timeType = TIME_TEXT[Object.keys(TIME_TEXT).map(Number).find(t => hour <= t)];
  const tempClothes = Object.keys(CLOTHING).map(Number).find(c => NOW <= c);

  const clothing = {
    term: CLOTHING[tempClothes].TERM,
    temp: CLOTHING[tempClothes].TEMP,
    clothes: CLOTHING[tempClothes].CLOTHES
  };

  return (
    <>
      <Temp
        time={timeType}
        temps={temps}
        clothing={clothing}/>
      <Clothes
        temps={TEMPS}
        clothing={clothing}/>
    </>
  );
};

export default Main;
