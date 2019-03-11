// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSpecial from '../../../app/middleware/special';
import ExportUuid from '../../../app/middleware/uuid';

declare module 'egg' {
  interface IMiddleware {
    special: typeof ExportSpecial;
    uuid: typeof ExportUuid;
  }
}
