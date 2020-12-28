import React from 'react';

const Header = () => {
  return (
    <header>
      <button
        type="button"
        className="info">
        <span>메뉴 보기</span>
      </button>
      <span className="locationInformation">
    <strong className="location">도시명</strong>
    <span className="time">
      <span className="type">시간타입</span>
      <span className="hour">시간</span>
      <span className="minute">분</span>
    </span>
  </span>
      <button
        type="button"
        className="addLocation">
        <span>지역 추가</span>
      </button>
    </header>
  );
};

export default Header;
