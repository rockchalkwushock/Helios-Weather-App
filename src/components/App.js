import React, { Component } from 'react';

import BackgroundContainer from '../containers/BackgroundContainer';
import HeaderContainer from '../containers/HeaderContainer';
import SearchBarContainer from '../containers/SearchBarContainer';


export default class App extends Component {
  render() {
    return (
      <div className='test'>
        <SearchBarContainer />
        <HeaderContainer />
        <BackgroundContainer />
      </div>
    );
  }
}
