declare module 'egg-mock/bootstrap' {
  import { BaseMockApplication } from 'egg-mock';
  import * as _assert from 'power-assert';

  export const app: BaseMockApplication;
  export const assert: typeof _assert;
  export const mock: (a: any, b: string, c: (...args: any[]) => any) => any;
}

