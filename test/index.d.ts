import _assert from 'assert';
import { BaseMockApplication } from 'egg-mock';

declare module 'egg-mock/bootstrap' {
  export const app: BaseMockApplication;
  export const assert: typeof _assert;
  export const mock: (a: any, b: string, c: (...args: any[]) => any) => any;
}

