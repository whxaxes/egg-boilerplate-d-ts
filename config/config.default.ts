'use strict';

import { EggAppConfig, EggConfig } from 'egg';

// business config
export interface BizConfig {
  [key: string]: any;
  local?: {
    msg: string;
  };
}

// default config
export type DefaultConfig = EggConfig & BizConfig;

export default function(appInfo: EggAppConfig) {
  const config: DefaultConfig = {};
  config.keys = appInfo.name + '_1513135333623_4128';
  config.middleware = [ 'uuid' ];
  config.local = {
    msg: 'default',
  };
  return config;
}
