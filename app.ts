import { Application } from 'egg';
import * as path from 'path';

export default (app: Application) => {
  const directory = path.resolve(app.baseDir, './app/model');
  app.loader.loadToApp(directory, 'model', {
    caseStyle: 'upper',
    directory,
  });
};
