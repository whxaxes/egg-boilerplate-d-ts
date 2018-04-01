import { Context } from 'egg';

export default {
  get isProd(this: Context) {
    return this.app.config.env === 'prod';
  },

  isAjax(this: Context) {
    return this.get('X-Requested-With') === 'XMLHttpRequest';
  },
};
