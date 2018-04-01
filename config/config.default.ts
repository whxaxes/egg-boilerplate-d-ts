'use strict';

import { EggAppConfig } from 'egg';

export default function(appInfo: EggAppConfig) {
  return {
    keys: appInfo.name + '_1513135333623_4128',
    middleware: [
      'uuid',
    ],
  };
}
