import React from 'react';

const CitiesPresenter = _ => {
  return (
    <div className="layer cities on">
      <button
        type="button"
        className="buttonClose">
        <span>도시리스트 레이어 닫기</span>
      </button>
      <div className="searchWrap">
        <strong className="layerTitle">도시 리스트</strong>
      </div>
      <div className="locations">
        <ul>
          <li>
            <span>인천
              <span className="default">선택됨</span>
            </span>
            <span>
              <button
                type="button"
                className="load"
                data-city="incheon">
                조회
              </button>
              <button
                type="button"
                className="remove"
                data-city="incheon">
                삭제
              </button>
            </span>
          </li>
          <li>
            <span>서울</span>
            <span>
              <button
                type="button"
                className="load"
                data-city="seoul">
                조회
              </button>
              <button
                type="button"
                className="remove"
                data-city="seoul">
                삭제
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CitiesPresenter;
