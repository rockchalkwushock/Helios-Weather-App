import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux/es';
import { AppContainer } from 'react-hot-loader';
import { store } from './redux';

import App from './layout/App';

/**
 * TODO
 * - import <Routes />
 * - import store
 * - import styles
 * - setup Service Worker
 */

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layout/App.js', () => {
    const NewApp = require('./layout/App').default;
    renderApp(NewApp);
  });
}
