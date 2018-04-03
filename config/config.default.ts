'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

// business config
export interface BizConfig {
  middleware?: string[];
  local: {
    msg: string;
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

  return config;
}
