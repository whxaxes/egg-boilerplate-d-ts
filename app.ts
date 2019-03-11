import { Application } from 'egg';
import { formatDate } from '~/app/lib/utils';

export default (app: Application) => {
  app.logger.info(`App started in ${formatDate(new Date())}`);
};
