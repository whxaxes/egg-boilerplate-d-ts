import { Context } from 'egg';

export default (): any => {
  return async (ctx: Context, next: any) => {
    ctx.locals.hello = 'hello';
    await next();
  };
};
