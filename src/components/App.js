import React, { Component } from 'react';

import { ButtonContainer, HeaderContainer, SearchBarContainer} from '../containers/MyContainers';
import { Navbar } from './MyComponents';

export default class App extends Component {
  render() {
    return (
      <div className='test'>
        <Navbar />
        <SearchBarContainer />
        <HeaderContainer />
        <ButtonContainer />
      </div>
    );
  }
}
