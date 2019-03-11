'use strict';

import 'tsconfig-paths/register';
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {};

plugin.routerPlus = {
  package: 'egg-router-plus',
  enable: true,
};

export default plugin;
