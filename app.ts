import { Application } from 'egg';
import * as path from 'path';
import { formatDate } from '~/app/lib/utils';

export default (app: Application) => {
  app.logger.info(`App started in ${formatDate(new Date())}`);

  const directory = path.resolve(app.baseDir, './app/model');
  app.loader.loadToApp(directory, 'model', {
    caseStyle: 'upper',
    directory,
  });
};
