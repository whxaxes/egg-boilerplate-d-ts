import { Context, EggAppConfig } from 'egg';
import { v4 } from 'uuid';

export default function(options: EggAppConfig['uuid']) {
  return async (ctx: Context, next: any): Promise<void> => {
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
