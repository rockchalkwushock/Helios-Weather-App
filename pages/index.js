/* eslint-disable no-shadow */

import { Component } from 'react'
import { connect } from 'react-redux'

import { page, getCurrentWeather, getHourlyForecast } from '../lib'
import { Search } from '../components'

@connect(null, { getCurrentWeather, getHourlyForecast })
class HomePage extends Component {
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
    return <Search onSubmit={this.submit} />
  }
}

export default page(HomePage)
