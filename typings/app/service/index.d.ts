// This file is created by egg-ts-helper@1.25.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTime from '../../../app/service/Time';

declare module 'egg' {
  interface IService {
    time: ExportTime;
  }
}
