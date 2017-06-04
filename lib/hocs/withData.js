import { Component } from 'react'
import { Provider } from 'react-redux'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { store } from '../redux'

/**
 * @function withData
 * @param {Func} ComposedComponent Higher-Order-Function/Component for applying data to components.
 * @returns {Function} Returns component with access to redux store.
 */
export default ComposedComponent =>
  class WithData extends Component {
    static getInitialProps = async ctx =>
      loadGetInitialProps(ComposedComponent, ctx)
    render() {
      return (
        <Provider store={store}>
          <ComposedComponent {...this.props} />
        </Provider>
      )
    }
  }
