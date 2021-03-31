import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import { getCity } from './actions/weather';
import { useOnMounted } from './actions/useOnMount';
import { getWeather } from './utils/getWeather';
import Header from './components/Header';

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

  useOnMounted(_ => {
    initTime();
    (async _ => {
      const weather = await getWeather({location: 'seoul'});
      await getCity({weather});
    })();

    setInterval(_ => {
      initTime();
    }, 5000);
  }, []);
  return (
    <Router>
      <Header
        time={time}
        city={weather.city.current}/>
        <div>{weather.city.current}</div>
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
