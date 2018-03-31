'use strict';

import { BaseConfig, Config } from './utils';

@Config
export default class ProdConfig extends BaseConfig {
  local = {
    msg2: 'prod config',
  };
}
