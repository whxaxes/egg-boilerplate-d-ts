import { EggAppConfig } from 'egg';
import DefaultConfig from './config.default';
import LocalConfig from './config.local';
import ProdConfig from './config.prod';

type NewEggAppConfig = EggAppConfig & DefaultConfig & LocalConfig & ProdConfig;
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

  interface BaseContextClass {
    config: NewEggAppConfig;
  }
}
