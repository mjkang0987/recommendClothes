import { withRouter, Link } from 'react-router-dom';
import { useContext } from 'react';
import { Weather } from '../App';
import { INITIAL_DASH, CITIES, TIME_TEXT_HALF } from '../constants/constants';

const Header = ({location}) => {
  const value = useContext(Weather);
  const {hour, minute} = value.time;
  const {LOCATION} = value.weather;
  const {DOUBLE, QUARTER} = INITIAL_DASH;
  const {MORNING, AFTERNOON} = TIME_TEXT_HALF;
  const isAll = location.pathname.includes('all');

  return (
    <header className="header">
      <Link
        to={`${isAll ? '/' : '/cities/all'}`}
        className={`btn-header-info${isAll ? ' active' : '' }`}>
        <span>메뉴 보기</span>
      </Link>
      <span className="header-info">
        <strong className="header-location">{LOCATION ? CITIES[LOCATION] : QUARTER}</strong>
        <span className="header-time">
          <span className="header-time-type">
            {hour !== '' ? (hour < 12 ? MORNING : AFTERNOON) : QUARTER}
          </span>
          <span className="header-time-hour">
            {hour !== '' ? (hour < 10 ? `0${hour}` : `${hour}`) : DOUBLE}
          </span>
          <span className="header-time-minute">
            {minute !== '' ? (minute < 10 ? `0${minute}` : `${minute}`) : DOUBLE}</span>
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

export default withRouter(Header);
