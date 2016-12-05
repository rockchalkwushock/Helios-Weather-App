import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/index';

class HeaderContainer extends Component {
  render() {
    const { isFetched, weatherData } = this.props.current;
    return (
      <Header weather={weatherData} isFetched={isFetched} />
    );
  }
}

const mapStateToProps = ({ current }) => ({ current });

export default connect(mapStateToProps)(HeaderContainer);
