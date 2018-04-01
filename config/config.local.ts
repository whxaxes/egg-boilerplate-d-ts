'use strict';

import { BaseConfig, Config } from './utils';

@Config
export default class LocalConfig extends BaseConfig {
  local = {
    msg: 'local config',
    go: {
      test: 'yoyo',
    },
  };
}
