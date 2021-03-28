import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { timeGet } from './actions/time';
import Header from './components/Header';

const App = ({hour, minute, timeGet}) => {
  setInterval(_ => {
    const now = new Date();
    const currentTime = {
      hour: now.getHours(),
      minute: now.getMinutes()
    }
    timeGet({now: currentTime});
  }, 5000);

  return (
    <Router>
      <Header
        hour={hour}
        minute={minute}/>
    </Router>
  );
}

const mapStateToProps = state => ({
  hour: state.timeReducer.hour,
  minute: state.timeReducer.minute
})

const mapDispatchToProps = dispatch => ({
  timeGet: ({now}) => {
    dispatch(timeGet({now}));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
