'use strict';

import { BaseConfig, Config } from './utils';

@Config
export default class DefaultConfig extends BaseConfig {
  get keys() {
    return this.appInfo.name + '_1513135333623_4128';
  }

  middleware = [
    'uuid',
  ];
}
