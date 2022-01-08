const fs = require('fs');
const path = require('path');

const PLUGIN_NAME = 'BuildInfoWebpackPlugin';

class BuildInfoWebpackPlugin {
  constructor(opts) {
    this.opts = opts;
  }

  isWebpack5(compiler) {
    return Boolean(
      compiler.webpack &&
        compiler.webpack.version &&
        compiler.webpack.version.startsWith('5'),
    );
  }

  apply(compiler) {
    compiler.hooks.done.tap(PLUGIN_NAME, (stats) => {
      const { hash, startTime, endTime } = stats;

      console.log(hash, startTime, endTime);
    });
  }
}

module.exports = BuildInfoWebpackPlugin;
