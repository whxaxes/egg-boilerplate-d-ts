import * as moment from 'moment';

export function formatDate(time: string | number | Date) {
  const date = time instanceof Date ? time : new Date(time);
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
