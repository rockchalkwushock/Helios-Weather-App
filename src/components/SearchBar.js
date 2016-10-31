import React from 'react';

const SearchBar = ({ getWeather }) => {
  return(
    <form className='input-group'>
      <input
      onChange={event => getWeather(event.target.value)}
      className='form-control'
      placeholder='Search a US City' />
      <span className='input-group-btn'>
        <button className='btn btn-secondary' type='submit'>Submit</button>
      </span>
    </form>
  );
}

export default SearchBar;
