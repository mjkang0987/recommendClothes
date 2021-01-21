import { useContext } from 'react';
import { Weather } from '../../App';
import MainPresenter from './MainPresenter';

const MainContainer = _ => {
  const temps = useContext(Weather);
  const {TEMPS} = temps.weather;
  console.log(TEMPS)
  return (
    <MainPresenter/>
  );
};

export default MainContainer;
