'use strict';

import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller, middleware } = app;

  router.get('/', middleware.special(), controller.home.index);
  router.get('/error', controller.home.error);
};
