import Temp from '../../components/Main/Temp';
import Clothes from '../../components/Main/Clothes';
import { CLOTHING, TIME_TEXT } from '../../constants/constants';

const Main = ({time, weather}) => {
  const {hour} = time;
  const {now} = weather;
  const timeType = TIME_TEXT[Object.keys(TIME_TEXT).map(Number).find(t => hour <= t)];
  const tempClothes = Object.keys(CLOTHING).map(Number).find(c => now <= c);

  const clothing = {
    term: CLOTHING[tempClothes].TERM,
    temp: CLOTHING[tempClothes].TEMP,
    clothes: CLOTHING[tempClothes].CLOTHES
  };

  return (
    <>
      <Temp
        time={timeType}
        weather={weather}
        clothing={clothing}/>
      <Clothes
        weather={weather}
        clothing={clothing}/>
    </>
  );
};

export default Main;
