// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import User from '../../../app/model/User';

declare module 'sequelize' {
  interface Sequelize {
    User: ReturnType<typeof User>;
  }
}
