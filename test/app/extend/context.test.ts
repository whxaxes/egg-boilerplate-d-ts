'use strict';

import { Context } from 'egg';
import mm from 'egg-mock';
import { app, assert } from 'egg-mock/bootstrap';

describe('test/app/extend/context.test.js', () => {
  afterEach(() => {
    mm.restore();
  });

  let ctx: Context;
  before(async () => {
    await app.ready();
    ctx = app.mockContext({}) as Context;
  });

  it('context should has isProd and isAjax', async () => {
    assert(typeof ctx.isProd === 'boolean');
    assert(typeof ctx.isAjax === 'boolean');
  });
});
