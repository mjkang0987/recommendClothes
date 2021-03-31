import { CITIES, INITIAL_DASH, TIME_TEXT_HALF } from '../constants/constants';

const Header = ({time, city}) => {
  const {hour, minute} = time;
  const {MORNING, AFTERNOON} = TIME_TEXT_HALF;
  const {DOUBLE, QUARTER} = INITIAL_DASH;

  return (
    <header className="header">
      <span className="header-info">
        <strong className="header-location">{city ? CITIES[city] : QUARTER}</strong>
        <span className="header-time">
          <span className="header-time-type">
            {hour !== '' ? (hour < 12 ? MORNING : AFTERNOON) : QUARTER}
          </span>
          <span className="header-time-hour">
            {hour !== '' ? (hour < 10 ? `0${hour}` : `${hour}`) : DOUBLE}
          </span>
          <span className="header-time-minute">
            {minute !== '' ? (minute < 10 ? `0${minute}` : `${minute}`) : DOUBLE}
          </span>
        </span>
      </span>
    </header>
  );
};

export default Header;
