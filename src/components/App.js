import React, { Component } from 'react';

import { BackgroundContainer, HeaderContainer, SearchBarContainer} from '../containers/MyContainers';


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
