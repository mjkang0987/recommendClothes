import { Weather } from '../App';
import { INITIAL_DASH, CITIES } from '../constants/constants';
import { useContext } from 'react';

const Header = _ => {
  const value = useContext(Weather);
  const {hour, minute} = value.time;
  const {LOCATION} = value.weather;
  const {DOUBLE, QUARTER} = INITIAL_DASH;

  return (
    <header className="header">
      <button
        type="button"
        className="btn-header-info">
        <span>메뉴 보기</span>
      </button>
      <span className="header-info">
        <strong className="header-location">{LOCATION ? CITIES[LOCATION] : QUARTER}</strong>
        <span className="header-time">
          <span className="header-time-type">{QUARTER}</span>
          <span className="header-time-hour">{hour && hour < 10 ? `0${hour}` : `${hour}`}</span>
          <span className="header-time-minute">{minute && minute < 10 ? `0${minute}` : `${minute}`}</span>
        </span>
      </span>
      <button
        type="button"
        className="btn-header-location">
        <span>지역 추가</span>
      </button>
    </header>
  );
};

export default Header;
