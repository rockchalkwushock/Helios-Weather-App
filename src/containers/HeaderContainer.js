import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';

class HeaderContainer extends Component {
  render() {
    const { isFetched, weatherData } = this.props.current;
    const { icon } = this.props.cw_image;
    return (
      <Header props={ weatherData } icon={ icon } isFetched={ isFetched }/>
    );
  }
}

const mapStateToProps = ({ current, cw_image }) => {
  return { current, cw_image };
};

export default connect(mapStateToProps)(HeaderContainer);
