import { EggAppConfig } from 'egg';
import defaultConfig from './config.default';
import localConfig from './config.local';
import prodConfig from './config.prod';

type NewEggAppConfig = EggAppConfig &
  ReturnType<typeof defaultConfig> &
  ReturnType<typeof localConfig> &
  ReturnType<typeof prodConfig>;

declare module 'egg' {
  interface Application {
    config: NewEggAppConfig;
  }

  interface EggApplication {
    config: NewEggAppConfig;
  }

  interface Controller {
    config: NewEggAppConfig;
  }

  interface Service {
    config: NewEggAppConfig;
  }
}
