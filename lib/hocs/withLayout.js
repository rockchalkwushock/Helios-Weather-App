import { Component } from 'react'
import { css, rehydrate } from 'glamor'
import { ThemeProvider } from 'glamorous'
import { loadGetInitialProps } from 'next/dist/lib/utils'

import { BaseStyles, GlobalStyles } from '../styles'
import { Wrapper } from '../../components'

export default ComposedComponent =>
  class WithLayout extends Component {
    static getInitialProps = async ctx =>
      loadGetInitialProps(ComposedComponent, ctx)
    componentWillMount() {
      // when we can use babel-plugin-glamorous-displayname then this will be handy
      // glamorous.config.useDisplayNameInClassName = true

      // Adds server generated styles to glamor cache.
      // Has to run before any `style()` calls
      // '__NEXT_DATA__.ids' is set in '_document.js'
      if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
        rehydrate(window.__NEXT_DATA__.ids)
      }
    }
    render() {
      css.insert(BaseStyles())
      return (
        <ThemeProvider theme={GlobalStyles}>
          <Wrapper>
            <ComposedComponent {...this.props} />
          </Wrapper>
        </ThemeProvider>
      )
    }
  }
