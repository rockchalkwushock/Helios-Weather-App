import React from 'react';
import { Router } from 'react-router/es';
import { history } from './redux';
import App from './layout/App';
import Home from './pages/Home';

const errorLoading = err =>
  console.error('Dynamic page loading failed', err); // eslint-disable-line

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: '/current',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Current');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      },
    },
    {
      path: '/forecast',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Forecast');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      },
    },
    {
      path: '*',
      async getComponent(location, cb) {
        try {
          const module = await import('./pages/Page404');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      },
    },
  ],
};

export default () => (
  <Router
    history={history}
    key={Math.random()}
    routes={componentRoutes}
  />
);
