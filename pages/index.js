/* eslint-disable no-shadow */
/* eslint-disable no-console */

import { Component } from 'react'
import { connect } from 'react-redux'

import { page, getCurrentWeather, getHourlyForecast } from '../lib'
import { Search } from '../components'

@connect(
  state => ({
    current: state.current,
    forecast: state.forecast
  }),
  { getCurrentWeather, getHourlyForecast }
)
class HomePage extends Component {
  /**
   * REVIEW: This prevents the component from rerendering
   * twice because although Promise.all() is resolving
   * both requests as one promise 2 actions are being dispatched
   * to the store cause 2 updates. This code prevents a rerender
   * of the component from happening unless BOTH data sets have been fetched.
   *
   * As long as I catch incorrect inputs with form validation I do not need
   * to check if error: true. The way the FETCH_ERROR action fires at the moment
   * error & isFetched both evaluate to true, I do not want to change this.
   * Might want to use cwrp(nextProps) to evaluate.
   */
  shouldComponentUpdate(nextProps) {
    const { current, forecast } = nextProps
    if (current.isFetched === false && forecast.isFetched === false) {
      return false
    } else if (current.isFetched === true && forecast.isFetched === false) {
      return false
    } else if (current.isFetched === false && forecast.isFetched === true) {
      return false
    }
    return true
  }
  componentWillUpdate() {
    // should ONLY fire one time
    console.log('updating')
  }
  submit = async values => {
    const { getCurrentWeather, getHourlyForecast } = this.props
    /**
     * FIXME:
     *
     * This will populate the store with the given data I want;
     * however, I need to handle form validation to make sure no
     * extraneous values are passed. This must be done because
     * Promise.all() has fail fast behavior meaning if any of the
     * Promises are rejected it will abort at that point in time and
     * will read as a rejected Promise itself.
     *
     * @see https://egghead.io/lessons/javascript-await-multiple-promises-concurrently-with-promise-all
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
     */
    await Promise.all([getCurrentWeather(values), getHourlyForecast(values)])
  }
  render() {
    console.log(this.props)
    return <Search onSubmit={this.submit} />
  }
}

export default page(HomePage)
