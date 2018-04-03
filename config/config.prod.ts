'use strict';

import { NewEggAppConfig } from './config.default';

export default function(): NewEggAppConfig {
  return {
    local: {
      msg: 'prod',
    },
  };
};
