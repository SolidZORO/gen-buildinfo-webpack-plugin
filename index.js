const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const PLUGIN_NAME = 'BuildInfoWebpackPlugin';

class BuildInfoWebpackPlugin {
  constructor(opts) {
    const PROJECT_ROOT_DIR = path.resolve();
    const PROJECT_PUBLIC_DIR = `${PROJECT_ROOT_DIR}/public`;

    this.opts = {
      package: {},
      commitHashLength: 4,
      buildFileDir: PROJECT_PUBLIC_DIR,
      buildFileName: 'buildinfo.json',
      ...opts,
    };
  }

  apply(compiler) {
    compiler.hooks.afterPlugins.tap(PLUGIN_NAME, () => {
      let commitHash = '';

      try {
        const execStr = 'git rev-parse HEAD';
        commitHash = require('child_process').execSync(execStr);
        commitHash = commitHash.toString().trim();
      } catch (err) {
        console.log(err);
        throw 'Not Found Git Commit Hash!';
      }

      const {
        package: pkg,
        buildFileDir,
        buildFileName,
        commitHashLength,
      } = this.opts;

      const buildInfo = {
        PKG_NAME: pkg.name || '-',
        VERSION: pkg.version || '0.0.0',
        AUTHOR: pkg.author ? `${pkg.author}`.replace('@', '[#]') : null,
        VERSION_DASH: pkg.version.replace(/\./g, '-') || '0-0-0',
        VERSION_NUMBER: pkg.version.replace(/\./g, '') || '000',
        NODE_ENV: process.env.NODE_ENV,
        BUILD_TIME: dayjs().format('YYYYMMDD-HHmmss'),
        GIT_COMMIT_HASH: commitHash.substr(0, commitHashLength) || '0000',
      };

      fs.writeFileSync(
        path.resolve(buildFileDir, buildFileName),
        JSON.stringify(buildInfo, null, 2),
      );
    });
  }
}

module.exports = BuildInfoWebpackPlugin;
