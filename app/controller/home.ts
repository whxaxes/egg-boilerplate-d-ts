'use strict';

import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const time = service.time.today();

    if (ctx.isAjax) {
      ctx.body = { time };
    } else {
      ctx.body = time;
    }
  }

  public async error() {
    throw new Error('see the error stack!!');
  }
}
