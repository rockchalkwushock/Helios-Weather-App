import React, { propTypes } from 'react';

const SearchBar = ({ getWeather }) => {
  let textInput = null;
  return(
    <form className='input-group' onSubmit={event => getWeather(textInput)}>
      <input
      ref={(input) => textInput = input}
      className='form-control'
      placeholder='Search a US City' />
      <span className='input-group-btn'>
        <button className='btn btn-secondary' type='submit'>Submit</button>
      </span>
    </form>
  );
}

SearchBar.propTypes = {
  getWeather: React.PropTypes.func
}

export default SearchBar;
