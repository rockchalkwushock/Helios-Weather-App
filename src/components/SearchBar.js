import React, { propTypes } from 'react'; // eslint-disable-line

const SearchBar = ({ fetchWeather }) => {
  let textInput = null;
  return (
    <form
      className='input-group searchbar'
      onSubmit={event => { event.preventDefault(); fetchWeather(textInput); }}
    >
      <input
      ref={(input) => textInput = input} // eslint-disable-line
      className='form-control'
      placeholder='Search a US City'
      />
      <span className='input-group-btn'>
        <button className='btn btn-secondary' type='submit'>Submit</button>
      </span>
    </form>
  );
};

SearchBar.propTypes = {
  fetchWeather: React.PropTypes.func
};

export default SearchBar;
