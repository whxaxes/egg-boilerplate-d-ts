import { Context } from 'egg';
import { v4 } from 'uuid';

export default function() {
  return async (ctx: Context, next: any) => {
    let uuid = ctx.cookies.get('uuid', { signed: true });

    if (!uuid || uuid === 'null') {
      uuid = v4();

      ctx.cookies.set('uuid', uuid, {
        signed: true,
      });
    }

    ctx.locals.uuid = uuid;
    await next();
  };
}
