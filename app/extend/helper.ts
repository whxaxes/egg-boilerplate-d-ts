import { IHelper } from 'egg';

export default {
  test(this: IHelper) {
    return this.ctx;
  },
};
