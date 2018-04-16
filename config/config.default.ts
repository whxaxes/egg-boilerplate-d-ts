'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

// business config
export interface BizConfig {
  local: {
    msg: string;
  };
  uuid: {
    name: string;
    maxAge: number;
  };
}

// default config
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  config.keys = appInfo.name + '123123';

  config.middleware = ['uuid'];

  config.local = {
    msg: 'local',
  };

  config.uuid = {
    name: 'ebuuid',
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
  };

  return config;
}
