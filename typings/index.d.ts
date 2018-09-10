import { PlainObject } from 'egg';

declare module 'egg' {
  interface IModel extends PlainObject { }

  // extend app
  interface Application {
    model: IModel;
  }
}