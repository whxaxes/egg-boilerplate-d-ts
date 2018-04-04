import { Context } from 'egg';
import { v4 } from 'uuid';
import { BizConfig } from '../../config/config.default';

export default function(options: BizConfig['uuid']) {
  return async (ctx: Context, next: any) => {
    const name = options.name || 'uuid';
    let uuid = ctx.cookies.get(name, { signed: true });

    if (!uuid || uuid === 'null') {
      uuid = v4();

      ctx.cookies.set(name, uuid, {
        signed: true,
        maxAge: options.maxAge,
      });
    }

    ctx.locals.uuid = uuid;
    await next();
  };
}
