import compose from 'koa-compose';
import Router from 'koa-router';

export default () => {
  const router = new Router();

  router.get('/ping', async ctx => {
    ctx.body = 'Hello World, Testing!'; // eslint-disable-line
  });
  // route for SSR here.
  return compose([router.routes(), router.allowedMethods()]);
};
