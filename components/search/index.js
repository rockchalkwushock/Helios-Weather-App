import { Component } from 'react'
import { reduxForm } from 'redux-form'

import Form from './Form'

@reduxForm({ form: 'search' })
export default class Search extends Component {
  render() {
    const { handleSubmit } = this.props
    return <Form handleSubmit={handleSubmit} />
  }
}
