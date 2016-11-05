import React, { Component } from 'react';

import { SearchBarContainer } from '../containers/MyContainers';
import { Dashboard, Navbar } from './MyComponents';

export default class App extends Component {
  render() {
    return (
      <div className='test'>
        <Navbar />
        <SearchBarContainer />
        <Dashboard />
      </div>
    );
  }
}
