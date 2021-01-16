import { createContext, useState } from 'react';
import { useOnMounted } from './action/useOnMount';
import { fetchData } from './action/fetch';
import Header from './components/Header';
import Main from './routes/main/index';
import Footer from './components/Footer';
import { API, INITIAL_WEATHER, TEMP } from './constants/constants';

const {getData} = fetchData;
const {URL, KEY} = API;
const {LOCATION} = INITIAL_WEATHER;
const {ABSOLUTE} = TEMP;

export const Weather = createContext(INITIAL_WEATHER);
function App() {
  const [weather, setWeather] = useState(INITIAL_WEATHER);
  const [location, setLocation] = useState(LOCATION);

  const getWeather = async ({city}) => {
    return await getData({url: `${URL}?q=${city}${KEY}`});
  };

  const init = _ => {
    getWeather({city: location})
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

  useOnMounted(_ => {
    init();
  });

  return (
    <>
      <Weather.Provider value={weather}>
        <Header/>
        <Main/>
        <Footer/>
      </Weather.Provider>
    </>
  );
}

export default App;
