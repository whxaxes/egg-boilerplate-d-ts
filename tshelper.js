const path = require('path');

module.exports = {
  watchDirs: {
    model: {
      path: 'app/model', // dir path
      generator: 'function', // generator name
      declareTo: 'Application.model', // declare to this interface
    },
  },
};
