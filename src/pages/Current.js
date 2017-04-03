import React, { Component } from 'react';
import { connect } from 'react-redux/es';

@connect(state => ({ weather: state.weather }))
export default class extends Component {
  render() {
    return (
      <h1>Current Weather</h1>
    );
  }
}
