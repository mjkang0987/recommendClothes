import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTime } from './actions/time';
import Header from './components/Header';

const App = ({hour, minute, getTime}) => {
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
  getTime: ({now}) => {
    dispatch(getTime({now}));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
