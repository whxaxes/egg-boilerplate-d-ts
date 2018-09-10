'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(): PowerPartial<EggAppConfig> {
  return {
    local: {
      msg: 'local',
    },
  };
};
