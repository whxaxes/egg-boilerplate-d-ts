import { EggAppConfig } from 'egg';

export class BaseConfig {
  constructor(public appInfo: EggAppConfig, ...args: any) {}
}

export function Config<
  T extends { new (appInfo: EggAppConfig, ...args: any): BaseConfig }
>(constructor: T) {
  const returnFunc = (appInfo: EggAppConfig) => {
    const keys = Object.getOwnPropertyNames(constructor.prototype);
    const config = new constructor(appInfo);
    const ret = { ...config };
    // add getter
    for (const key of keys) {
      if (key === 'constructor') {
        continue;
      }
      ret[key] = config[key];
    }
    return ret;
  };
  return (returnFunc as any) as T;
}
