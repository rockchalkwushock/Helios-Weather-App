import compose from 'koa-compose'; // https://github.com/koajs/compose
import koaHelmet from 'koa-helmet'; // https://github.com/venables/koa-helmet
import morgan from 'koa-morgan'; // https://github.com/koa-modules/morgan
import koaStatic from 'koa-static'; // https://github.com/koajs/static
import { join } from 'path';

// Build middleware and push to array for composing
// into function: middlewares()
export default () => {
  const MODE = process.env.NODE_ENV || 'development';
  const middlewares = [];
  const format = MODE === 'development' ? 'dev' : 'tiny';

  middlewares.push(morgan(format));
  middlewares.push(koaHelmet());
  middlewares.push(koaStatic(join(__dirname, 'dist')));
  return compose(middlewares);
};
