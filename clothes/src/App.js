import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import { getCity } from './actions/weather';
import { useOnMounted } from './actions/useOnMount';
import { fetchData } from './utils/fetch';
import { API, TEMP } from './constants/constants';
import Header from './components/Header';

const {getData} = fetchData;
const {URL, KEY} = API;
const {ABSOLUTE} = TEMP;

const App = ({time, getTime, weather, getCity}) => {
  const initTime = _ => {
    const initTime = new Date();
    const timeObj = {
      time: {
        hour: initTime.getHours(),
        minute: initTime.getMinutes()
      }
    };
    getTime({now: timeObj});
  }

  const getWeather = ({location = 'seoul'}) => {
    return (async _ => {
      const res = await getData({url: `${URL}?q=${location}${KEY}`});
      const {main: temps, name: city, weather} = res;
      const weatherData = {
        now: Math.trunc(temps.temp - ABSOLUTE),
        min: Math.trunc(temps.temp_min - ABSOLUTE),
        max: Math.trunc(temps.temp_max - ABSOLUTE),
        desc: weather[0].description,
        city: {
          current: city.toLowerCase(),
          // cities: [city.toLowerCase()]
        }
      }
      getCity({weather: weatherData})
    })();
  };
  useOnMounted(_ => {
    initTime();
    (async _ => {
      await getWeather({location: 'seoul'});
    })();

    setInterval(_ => {
      initTime();
    }, 3000);
  }, []);
  return (
    <Router>
      <Header
        time={time}
        city={weather.city.current}/>
        <div>{weather.city.cities}</div>
    </Router>
  );
}

export default connect(
  state => ({
    time: state.timeReducer.time,
    weather: state.weatherReducer.weather
  }),
  dispatch => ({
    getTime: ({now}) => {
      dispatch(getTime({now}));
    },
    getCity: ({weather}) => {
      dispatch(getCity({weather}));
    }
  })
)(App);
