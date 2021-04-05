import React from 'react';

const Search = ({setCity}) => {
  return (
    <label title="지역검색">
      <input
        type="search"
        onChange={e => setCity(e.target.value)}/>
    </label>
  )
}

export default React.memo(Search);