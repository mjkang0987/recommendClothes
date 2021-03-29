import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import Header from './components/Header';

const App = ({time, getTime, TEMPS}) => {
  setInterval(_ => {
    const now = new Date();
    const currentTime = {
      hour: now.getHours(),
      minute: now.getMinutes()
    }
    getTime({now: currentTime});
  }, 5000);

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
