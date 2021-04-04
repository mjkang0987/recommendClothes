import { INITIAL_DASH } from '../../constants/constants';

const Temp = ({time, weather, clothing}) => {
  const {now, min, max, desc} = weather;
  const {DOUBLE, QUARTER} = INITIAL_DASH;
  const {temp} = clothing;
  return (
    <>
      <h2>오늘 날씨</h2>
      <article
        className="now-wrap"
        data-temp={temp && temp}>
        <strong className="now-temp">
          <span>{now ? now : DOUBLE}</span>
          <em>℃</em>
        </strong>
        <div className="now-weather-temp">
          <span className="now-weather">
            <span className="now-time">{time},</span>
            <span className="now-weather">{desc ? desc : QUARTER}</span>
          </span>
          <span className="now-temp-pitch">
            <span className="now-temp-max">
              <span className="number">{min ? min : DOUBLE}</span>
              <em>℃</em>
            </span>
            <span className="now-temp-min">
              <span className="number">{max ? max : DOUBLE}</span>
              <em>℃</em>
            </span>
          </span>
        </div>
      </article>
    </>
  );
};

export default Temp;
