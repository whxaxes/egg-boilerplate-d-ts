// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendIHelper from '../../../app/extend/helper';
declare module 'egg' {
  type ExtendIHelperType = typeof ExtendIHelper;
  interface IHelper extends ExtendIHelperType { }
}