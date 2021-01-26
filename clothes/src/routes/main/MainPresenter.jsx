import {useContext} from 'react';
import { Weather } from '../../App';
import { INITIAL_DASH} from '../../constants/constants';

const MainPresenter = ({timeType, clothing}) => {
  const temps = useContext(Weather);
  const {TEMPS, WEATHER} = temps.weather;
  const {NOW, MIN, MAX} = TEMPS;
  const {DOUBLE, QUARTER} = INITIAL_DASH;
  const {term, temp, clothes} = clothing;
  return (
    <>
      <h2><span>오늘 날씨</span></h2>
      <article
        className="now-wrap"
        data-temp={temp && temp}>
        <strong className="now-temp">
          <span>{NOW ? NOW : DOUBLE}</span>
          <em>℃</em>
        </strong>
        <div className="now-weather-temp">
          <span className="now-weather">
            <span className="now-time">{timeType},</span>
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
      {TEMPS.NOW !== '' && <article className="clothes">
        <div className="clothes-recommend">
          <strong>{`추천 ${term} 옷`}</strong>
          <ul>
            {clothes.map((c, index) => <li key={`${c}-${index}`}>{c}</li>)}
          </ul>
        </div>
      </article>}
    </>
  );
};

export default MainPresenter;
