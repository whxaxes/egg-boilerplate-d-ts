// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AutoInstanceType<T, U = T extends (...args: any[]) => any ? ReturnType<T> : T> = U extends { new (...args: any[]): any } ? InstanceType<U> : U;
import ExportCastle from '../../../app/model/Castle';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface Application {
    model: T_custom_model;
  }

  interface T_custom_model {
    Castle: AutoInstanceType<typeof ExportCastle>;
    User: AutoInstanceType<typeof ExportUser>;
  }
}
