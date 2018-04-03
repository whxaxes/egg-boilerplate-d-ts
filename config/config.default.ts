'use strict';

import { EggAppConfig, EggConfig, PowerPartial } from 'egg';

// business config
export interface BizConfig {
  middleware?: string[];
  local: {
    msg: string;
  };
}

// default config
export type DefaultConfig = EggConfig & PowerPartial<BizConfig>;
export default function(appInfo: EggAppConfig): EggConfig & BizConfig {
  return {
    keys: appInfo.name + '123123',
    middleware: [ 'uuid' ],
    local: {
      msg: 'default',
    },
  };
}
