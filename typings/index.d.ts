import { Context, EggAppConfig } from 'egg';

// extend egg
declare module 'egg' {
  type EggConfig = {
    [T in keyof EggAppConfig]?: {
      [U in keyof EggAppConfig[T]]?: {
        [V in keyof EggAppConfig[T][U]]?: EggAppConfig[T][U][V];
      }
    }
  }
}