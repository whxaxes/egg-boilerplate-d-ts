// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import ExtendObject from '../../../app/extend/context';
declare module 'egg' {
  interface Context {
    isProd: typeof ExtendObject.isProd;
    isAjax: typeof ExtendObject.isAjax;
  }
}