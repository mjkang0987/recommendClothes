import { connect } from 'react-redux';
import * as actions from '../../action/actions';
import CitiesPresenter from './CitiesPresenter';

const mapStateToProps = (state) => ({
  current: state.current,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: ({city}) => dispatch(actions.cityAdd({city})),
  onRemove: ({city}) => dispatch(actions.cityRemove({city}))
});

const CitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CitiesPresenter);

export default CitiesContainer;