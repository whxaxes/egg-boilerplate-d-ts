import { Context } from 'egg';

export default {
  get isProd() {
    const ctx = this as any as Context;
    return ctx.app.config.env === 'prod';
  },

  isAjax(this: Context) {
    return this.get('X-Requested-With') === 'XMLHttpRequest';
  },
};
