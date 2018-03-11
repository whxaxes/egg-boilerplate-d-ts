'use strict';

import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const uuid = ctx.locals.uuid;
    const time =  service.time.today();

    if (ctx.isAjax) {
      ctx.body = { uuid, time };
    } else {
      ctx.body = `${uuid}：${time}`;
    }
  }

  public async error() {
    throw new Error('see the error stack!!');
  }
}
