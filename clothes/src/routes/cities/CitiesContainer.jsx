import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import CitiesPresenter from './CitiesPresenter';

const mapStateToProps = (state) => ({
  current: state.current,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: ({city}) => dispatch(actions.cityAdd),
  onRemove: ({city}) => dispatch(actions.cityRemove),
  onUpdate: ({current}) => {
    dispatch(actions.cityUpdate({current}))
  },
});

const CitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesPresenter);

export default CitiesContainer;