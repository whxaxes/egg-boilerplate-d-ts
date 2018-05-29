// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Special from '../../../app/middleware/special';
import Uuid from '../../../app/middleware/uuid';

declare module 'egg' {
  interface IMiddleware {
    special: typeof Special;
    uuid: typeof Uuid;
  }
}
