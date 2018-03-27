'use strict';

import { Application, Context } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  router.get('/', function* (this: Context) {
    this.body = 'hi';
  });

  router.get('/error', controller.home.error);
};
