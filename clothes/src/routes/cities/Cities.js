import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../actions/useDebounce';
import Search from '../../components/Cities/Search';
import Local from '../../components/Cities/Local';
import { FIRST_KEY, FIRST_KEY_CITIES } from '../../constants/constants';

const Cities = _ => {
  const [city, setCity] = useState('');
  const debounceKeyword = useDebounce(city, 300);

  const getFirst = value => {
    const unicode = FIRST_KEY[Object.keys(FIRST_KEY).find(v => v === value)];
    if (unicode === undefined) return;
    console.log(Object.values(FIRST_KEY_CITIES[unicode]));
    return Object.values(FIRST_KEY_CITIES[unicode]);
  };

  useEffect(() => {
    if (debounceKeyword) {
      getFirst(city);
    }
  }, [debounceKeyword]);

  return (
    <div className="cities-wrap">
      <div>지역 검색</div>
      <Search setCity={setCity} />
      <Local />
    </div>
  )
}

export default React.memo(Cities);