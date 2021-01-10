import { INITIAL_DASH } from '../constants/constants';

const Header = _ => {
  const {DOUBLE, QUARTER} = INITIAL_DASH;
  return (
    <header className="header">
      <button
        type="button"
        className="btn-header-info">
        <span>메뉴 보기</span>
      </button>
      <span className="header-info">
        <strong className="header-location">{QUARTER}</strong>
        <span className="header-time">
          <span className="header-time-type">{QUARTER}</span>
          <span className="header-time-hour">{DOUBLE}</span>
          <span className="header-time-minute">{DOUBLE}</span>
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
