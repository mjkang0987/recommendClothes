const CitiesPresenter = ({cities, onAdd, onRemove, onUpdate}) => {
  return (
    <div className="cities-wrap">
      <div>{cities}</div>
      <label title="지역검색">
        <input
          type="text"
          onChange={e => onUpdate({current: e.target.value})}/>
      </label>
      <div className="cities-local">
        <ul>
          <li
            data-city="incheon"
            className="cities-local">
            <button
              type="button"
              className="btn-city-pick">
              <span>인천</span>
            </button>
            <span className="btn-cities-wrap">
              <button
                type="button"
                className="btn-city-pick">
                조회
              </button>
              <button
                type="button"
                className="btn-city-remove">
                삭제
              </button>
            </span>
          </li>
          <li data-city="seoul">
            <button
              type="button"
              className="btn-city-pick">
              <span>서울</span>
            </button>
            <span className="btn-cities-wrap">
              <button
                type="button"
                className="btn-city-pick">
                조회
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CitiesPresenter;
