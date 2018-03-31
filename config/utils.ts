import { EggAppConfig } from 'egg';

export class BaseConfig {
  constructor(public appInfo: EggAppConfig) {}
}

export function Config<T extends { new (appInfo: EggAppConfig): BaseConfig }>(constructor: T) {
  const returnFunc = (appInfo: EggAppConfig) => {
    return new constructor(appInfo);
  };
  return returnFunc as any as T;
}
