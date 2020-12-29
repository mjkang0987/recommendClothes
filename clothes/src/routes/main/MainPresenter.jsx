import React from 'react';

const MainPresenter = _ => {
  return (
    <section className="contentWrap">
      <h2>
        <span>오늘 날씨</span>
        <button
          type="button"
          className="buttonRefresh"
          onClick="location.reload()">
          새로고침
        </button>
      </h2>
      <article
        className="temperature"
        data-temp="freezing">
        <strong className="nowTempWrap">
          <span>-5</span>
          <em>℃</em>
        </strong>
        <div className="weatherInfo">
          <span className="weather">
            <span className="timeType">밤,</span>
            <span className="weatherType">튼구름</span>
          </span>
          <span className="todayTemperature">
            <span className="maxWrap">
              <span className="number">-5</span>
              <em>℃</em>
            </span>
            <span className="minWrap">
              <span className="number">-5</span>
              <em>℃</em>
            </span>
          </span>
        </div>
      </article>
      <h2>오늘 뭐입지?</h2>
      <article className="clothes">
        <div className="recommendClothes">
          <strong>대충 겨울 옷</strong>
          <ul>
            <li>야상</li>
            <li>패딩</li>
            <li>목도리</li>
            <li>누빔옷</li>
            <li>두꺼운 코트</li>
            <li>기모</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default MainPresenter;
