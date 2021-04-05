const {useEffect} = require('react');
const {useState} = require('react');

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(_ => {
    const timer = setTimeout(_ => {
      setDebouncedValue(value);
    }, delay);
    return _ => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
