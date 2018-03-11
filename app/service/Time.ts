import { Service } from 'egg';
import * as moment from 'moment';

export default class TestService extends Service {
  today() {
    return moment().format('YYYY-MM-DD hh:mm:ss');
  }
}
