import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { Field, reduxForm } from 'redux-form/es';
import { getCurrentWeather } from '../modules';

@connect(
  state => ({ weather: state.weather }),
  { getCurrentWeather }
)
@reduxForm({ form: 'search-bar' })
class App extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.props.getCurrentWeather)}>
          <div>
            <label htmlFor="input">Search</label>
            <div>
              <Field name="input" component="input" type="text" placeholder="Search a US City." />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

