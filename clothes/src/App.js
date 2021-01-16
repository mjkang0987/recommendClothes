import { createContext, useState } from 'react';
import { useOnMounted } from './action/useOnMount';
import { fetchData } from './action/fetch';
import Header from './components/Header';
import Main from './routes/main/index';
import Footer from './components/Footer';
import { API, INITIAL_WEATHER, TEMP } from './constants/constants';

const {getData} = fetchData;
const {URL, KEY} = API;
const {CITY, TEMP, LOCATION, WEATHER} = INITIAL_WEATHER;
const weatherObject = {TEMP, LOCATION, WEATHER};

const Weather = createContext(weatherObject);
function App() {
  const [weather, setWeather] = useState(weatherObject);
  const [city, setCity] = useState(CITY);

  const getWeather = async _ => {
    return await getData({url: `${URL}?q=${city}${KEY}`});
  };

  const data = _ => {
    getWeather()
      .then(res => {
        setWeather(res);
        console.log(res);
      });
  };

  useOnMounted(_ => {
    data();
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
