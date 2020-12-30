import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <button
        type="button"
        className="btn-header-info">
        <span>메뉴 보기</span>
      </button>
      <span className="header-info">
        <strong className="header-location">도시명</strong>
        <span className="header-time">
          <span className="header-time-type">시간타입</span>
          <span className="header-time-hour">시간</span>
          <span className="header-time-minute">분</span>
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
