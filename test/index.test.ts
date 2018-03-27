'use strict';

import mm from 'egg-mock';

describe('test/index.test.js', () => {
  let app;
  beforeEach(() => {
    app = mm.app({ typescript: true });
    return app.ready();
  });

  it('should visit / without error', () => {
    return app
      .httpRequest()
      .get('/')
      .expect(200);
  });
});
