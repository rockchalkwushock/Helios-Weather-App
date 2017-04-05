import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './layout/App';
import { store } from './redux';
import './styles/styles.css';

if (process.env.NODE_ENV === 'production') {
  (() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  })();
  require('offline-plugin/runtime').install();
}

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
  module.hot.accept('./layout/App', () => {
    const NewApp = require('./layout/App').default;

    renderApp(NewApp);
  });
}
