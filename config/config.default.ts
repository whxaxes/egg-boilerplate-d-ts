'use strict';

import { EggAppConfig } from 'egg';
import { BaseConfig, Config } from './utils';

@Config
export default class DefaultConfig extends BaseConfig {
  keys: string;
  middleware = [
    'uuid',
  ];

  constructor(appInfo: EggAppConfig) {
    super(appInfo);
    this.keys = this.appInfo.name + '_1513135333623_4128';
  }
}
