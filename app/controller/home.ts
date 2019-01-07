'use strict';

import { Controller } from 'egg';
import { formatDate } from '~/app/lib/utils';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, service } = this;
    const time = service.time.today();
    this.app.logger.info(ctx.app.model.User.getData());
    this.app.logger.info(ctx.app.model.Castle.getData());
    this.app.logger.info(`request visit in ${formatDate(new Date())}`);

    if (ctx.isAjax()) {
      ctx.body = { time };
    } else {
      ctx.body = `
      <div style="text-align: center;font-size: 24px;padding: 30px 0;">
        ${this.config.local ? this.config.local.msg : ''} <span id="time">${time}</span>
      </div>
      <script>
        setInterval(function() {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', '/');
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          xhr.send();
          xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
              document.getElementById('time').innerText = JSON.parse(xhr.responseText).time;
            }
          }
        }, 1000);
      </script>
      `;
    }
  }

  public async error() {
    throw new Error('see the error stack!!');
  }
}
