'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  config.middleware = ['uuid'];

  config.security = {
    csrf: {
      ignore: '123',
    },
  };

  const bizConfig = {
    local: {
      msg: 'local',
    },

    uuid: {
      name: 'ebuuid',
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
    },
  };

  return {
    ...config,
    ...bizConfig,
  };
}
