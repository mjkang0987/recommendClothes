import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import Header from './components/Header';


const App = ({time, getTime, getCity}) => {

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

    setInterval(_ => {
      initTime();
    }, 3000);
  }, [])
  return (
    <Router>
      <Header time={time}/>
    </Router>
  );
}

export default connect(
  state => ({
    time: state.timeReducer.time
  }),
  dispatch => ({
    getTime: ({now}) => {
      dispatch(getTime({now}));
    }
  })
)(App);
