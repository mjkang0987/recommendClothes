import { fetchData } from './fetch';
import { API, TEMP } from '../constants/constants';

const {getData} = fetchData;
const {URL, KEY} = API;
const {ABSOLUTE} = TEMP;

export const getWeather = async ({location = 'seoul'}) => {
  const res = await getData({url: `${URL}?q=${location}${KEY}`});
  const {main: temps, name: city, weather} = res;
  return {
    now: Math.trunc(temps.temp - ABSOLUTE),
    min: Math.trunc(temps.temp_min - ABSOLUTE),
    max: Math.trunc(temps.temp_max - ABSOLUTE),
    desc: weather[0].description,
    city: {
      current: city.toLowerCase(),
      // cities: [city.toLowerCase()]
    }
  };
};
