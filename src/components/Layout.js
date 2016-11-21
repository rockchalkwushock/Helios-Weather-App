import React, { Component } from 'react';

import { Navbar } from './MyComponents';
import { SearchBarContainer } from '../containers/MyContainers';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Navbar />
        <SearchBarContainer />
        {this.props.children}
      </div>
    );
  }
}
