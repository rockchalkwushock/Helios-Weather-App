import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <form className='input-group'>
        <input
        className='form-control'
        placeholder='Search a US City'
        value={this.state.term}
        />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
