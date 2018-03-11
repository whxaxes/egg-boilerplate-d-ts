declare module 'egg-mock/bootstrap' {
  import { Application, Context } from 'egg';
  import { BaseMockApplication } from 'egg-mock';
  import * as _assert from 'power-assert';

  interface AliMockApp extends BaseMockApplication<Application, Context> {
    mockProxy: (proxy: string, methodName: string, fn: () => any) => AliMockApp;
  }

  export const app: AliMockApp;
  export const assert: typeof _assert;
  export const mock: (a: any, b: string, c: (...args: any[]) => any) => any;
}

