import { createContext, useState } from 'react';
import {createStore} from 'redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useOnMounted } from './action/useOnMount';
import { fetchData } from './action/fetch';
import Header from './components/Header';
import Main from './routes/main/index';
import Cities from './routes/cities';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { API, INITIAL_WEATHER, INITIAL_TIME, TEMP } from './constants/constants';

const {getData} = fetchData;
const {URL, KEY} = API;
const {ABSOLUTE} = TEMP;

const ADD = 'city/ADD';
const REMOVE = 'city/REMOVE';
const UPDATE = 'city/UPDATE';

const cityAdd = _ => ({type: ADD});
const cityRemove = _ => ({type: REMOVE});
const cityUpdate = _ => ({type: UPDATE});

const initialCity = {
  def: 'seoul',
  cities: []
};

const reducer = (state = initialCity, action) => {
  switch (action.type) {
  case UPDATE:
    console.log('asfasf')
    return {
      ...state,
      def: state.city
    };
  default:
    return state;
  }
};

export const store = createStore(reducer);

export const Weather = createContext({INITIAL_WEATHER, INITIAL_TIME});
const App = _ => {
  const [weather, setWeather] = useState(INITIAL_WEATHER);
  const {LOCATION} = weather;

  const getWeather = ({location = 'seoul'}) => {
    return (async _ => {
      const res = await getData({url: `${URL}?q=${location}${KEY}`});
      const {main: temps, name: city, weather} = res;
      const weatherData = {
        TEMPS: {
          NOW: Math.trunc(temps.temp - ABSOLUTE),
          MIN: Math.trunc(temps.temp_min - ABSOLUTE),
          MAX: Math.trunc(temps.temp_max - ABSOLUTE)
        },
        WEATHER: weather[0].description,
        LOCATION: city.toLowerCase()
      };
      setWeather(weatherData);
    })();
  };

  const initTime = new Date();
  const timeObj = {
    hour: initTime.getHours(),
    minute: initTime.getMinutes()
  };
  const [time, setTime] = useState(timeObj);

  const intervalTime = ({time}) => {
    setInterval(_=> {
      const currentTime = new Date();
      const currentTimeObj = {
        hour: currentTime.getHours(),
        minute: currentTime.getMinutes()
      }
      setTime(currentTimeObj);
    }, time);
  };

  useOnMounted(_ => {
    (async _ => {
      await getWeather({location: 'seoul'});
    })();
    intervalTime({time: 5000});
  });

  return (
    <>
      <Weather.Provider value={{weather, setWeather, getWeather, time}}>
        <Router>
          <Header/>
            <Route
              exact
              path="/"
              component={Cities}/>
            <Route
              path="/cities/:pn"
              component={Main}/>
          <Footer/>
          {!LOCATION && <Loading/>}
          <Redirect path="*" to="/" />
        </Router>
      </Weather.Provider>
    </>
  );
}

export default App;
