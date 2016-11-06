import React, { Component } from 'react';

import { Footer, Navbar } from './MyComponents';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
