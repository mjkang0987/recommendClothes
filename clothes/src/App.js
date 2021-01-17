import { createContext, useState } from 'react';
import { useOnMounted } from './action/useOnMount';
import { fetchData } from './action/fetch';
import Header from './components/Header';
import Main from './routes/main/index';
import Footer from './components/Footer';
import { API, INITIAL_WEATHER, INITIAL_TIME, TEMP } from './constants/constants';

const {getData} = fetchData;
const {URL, KEY} = API;
const {ABSOLUTE} = TEMP;

export const Weather = createContext({INITIAL_WEATHER, INITIAL_TIME});
const App = _ => {
  const [weather, setWeather] = useState(INITIAL_WEATHER);

  const getWeather = async ({city}) => {
    return await getData({url: `${URL}?q=${city}${KEY}`});
  };

  const init = _ => {
    const {LOCATION} = weather;
    getWeather({city: LOCATION})
      .then(res => {
        const {main: temps, name: city, weather} = res;
        const weatherData = {
          TEMPS: {
            NOW: Math.round(temps.temp - ABSOLUTE),
            MIN: Math.round(temps.temp_min - ABSOLUTE),
            MAX: Math.round(temps.temp_max - ABSOLUTE)
          },
          WEATHER: weather[0].description,
          LOCATION: city.toLowerCase()
        };
        setWeather(weatherData);
      });
  };

  const initTime = new Date();
  const timeObj = {
    hour: initTime.getHours(),
    minute: initTime.getMinutes()
  };
  const [time, setTime] = useState(timeObj);

  const intervalTime = _ => {
    setInterval(_=> {
      const currentTime = new Date();
      const currentTimeObj = {
        hour: currentTime.getHours(),
        minute: currentTime.getMinutes()
      }
      setTime(currentTimeObj);
    }, 3000);
  };

  useOnMounted(_ => {
    init();
    intervalTime();
  });

  return (
    <>
      <Weather.Provider value={{weather, time}}>
        <Header/>
        <Main/>
        <Footer/>
      </Weather.Provider>
    </>
  );
}

export default App;
