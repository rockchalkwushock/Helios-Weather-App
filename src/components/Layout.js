import React, { Component } from 'react';

import { Navbar } from './index';
import { SearchBarContainer } from '../containers/index';

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
