import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentWeather, fetchForecast } from '../actions/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this._onInputChange = this._onInputChange.bind(this);
    this._onFormSubmit = this._onFormSubmit.bind(this);
  }

  _onFormSubmit(event) {
    event.preventDefault();
    // Here is where we go to fetch weather data.
    this.props.fetchCurrentWeather(this.state.term);
    this.props.fetchForecast(this.state.term);
    this.setState({ term: '' }); // empty the form.
  }

  _onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form
      className='input-group'
      onSubmit={this._onFormSubmit}>
        <input
        className='form-control'
        placeholder='Search a US City'
        value={this.state.term}
        onChange={this._onInputChange} />
        <span className='input-group-btn'>
          <button className='btn btn-secondary' type='submit'>Submit</button>
        </span>
      </form>
    );
  }
}
// Connect(mapStateToProps, mapDispatchtoProps)(Component).
// No need for mapStateToProps but must pass null or will return error.
// Shortcut removes mapDispatchtoProps & bindActionCreators by injecting
// action creator as object in place of mapDispatchtoProps.
// ES6 shortcut fetchForecast: fetchForecast === fetchForecast.
export default connect(null, { fetchCurrentWeather, fetchForecast })(SearchBar);
