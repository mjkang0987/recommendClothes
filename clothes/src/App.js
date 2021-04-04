import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import { getCity } from './actions/weather';
import { useOnMounted } from './actions/useOnMount';
import { getWeather } from './utils/getWeather';
import Header from './components/Header';
import Main from './routes/main/Main';

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

    const interval = setInterval(initTime, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Router>
      <Header
        time={time}
        city={weather.city.current}/>
      <Route
        path="/"
        render={_ => <Main time={time} weather={weather}/>}/>
      <Redirect path="*" to="/" />
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
