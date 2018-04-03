'use strict';

import { EggAppConfig } from 'egg';

export interface BuzConfig {
  [key: string]: any;
  middleware?: string[];
  local?: {
    msg: string;
  };
}

export type NewEggAppConfig = {
  [key in keyof EggAppConfig]?: {
    [k in keyof EggAppConfig[key]]?: EggAppConfig[key][k]
  }
} & BuzConfig;

export default function(appInfo: EggAppConfig) {
  const config: NewEggAppConfig = {};
  config.keys = appInfo.name + '_1513135333623_4128';
  config.middleware = [ 'uuid' ];
  config.local = {
    msg: 'default',
  };
  return config;
}
