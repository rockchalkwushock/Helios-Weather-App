import 'isomorphic-fetch';
import Koa from 'koa';
import routing from './api';
import middlewares from './middlewares';

const PORT = process.env.PORT || 3000;

(async () => {
  const server = new Koa();
  server
    .use(middlewares())
    .use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        // Find better error handling before rolling for production.
        console.log('Error', e.message); // eslint-disable-line
        ctx.body = 'There was an error. Please try again later.'; // eslint-disable-line
      }
    })
    .use(routing())
    .listen(PORT, () => console.log(`Application running on: ${PORT}`)); // eslint-disable-line
})();
