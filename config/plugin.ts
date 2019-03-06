'use strict';

import 'tsconfig-paths/register';
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // mongoose: {
  //   package: 'egg-mongoose',
  //   enable: false,
  // },

  routerPlus: {
    package: 'egg-router-plus',
    enable: true,
  },
};

export default plugin;
