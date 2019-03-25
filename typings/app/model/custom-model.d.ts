// This file is created by egg-ts-helper@1.25.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
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
