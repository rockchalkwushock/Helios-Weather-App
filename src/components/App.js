import React, { Component } from 'react';

import SearchBar from '../containers/SearchBar';
import Dashboard from './Dashboard';

export default class App extends Component {
  render() {
    return (
      <div className='test'>
        <SearchBar />
        <Dashboard />
      </div>
    );
  }
}
