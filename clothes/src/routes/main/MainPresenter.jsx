import { useContext } from 'react';
import { Weather } from '../../App';
import { INITIAL_DASH} from '../../constants/constants';

const MainPresenter = _ => {
  const temps = useContext(Weather);
  const {TEMPS, WEATHER} = temps.weather;
  const {NOW, MIN, MAX} = TEMPS;
  const {DOUBLE, QUARTER} = INITIAL_DASH;
  return (
    <>
      <h2>
        <span>오늘 날씨</span>
        <button
          type="button"
          className="btn-refresh">
          새로고침
        </button>
      </h2>
      <article
        className="now-wrap"
        data-temp="freezing">
        <strong className="now-temp">
          <span>{NOW ? NOW : DOUBLE}</span>
          <em>℃</em>
        </strong>
        <div className="now-weather-temp">
          <span className="now-weather">
            <span className="now-time">밤,</span>
            <span className="now-weather">{WEATHER ? WEATHER : QUARTER}</span>
          </span>
          <span className="now-temp-pitch">
            <span className="now-temp-max">
              <span className="number">{MIN ? MIN : DOUBLE}</span>
              <em>℃</em>
            </span>
            <span className="now-temp-min">
              <span className="number">{MAX ? MAX : DOUBLE}</span>
              <em>℃</em>
            </span>
          </span>
        </div>
      </article>
      <h2>오늘 뭐입지?</h2>
      <article className="clothes">
        <div className="clothes-recommend">
          <strong>{WEATHER ? DOUBLE : DOUBLE}</strong>
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
    </>
  );
};

export default MainPresenter;
