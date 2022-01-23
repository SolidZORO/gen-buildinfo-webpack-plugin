const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const getRepoInfo = require('git-repo-info');

const PLUGIN_NAME = 'GenBuildInfoWebpackPlugin';

const getBuildInfo = (opts) => {
  const repoInfo = getRepoInfo();
  // console.log('---- repoInfo ----\n', repoInfo);
  const commitHash = repoInfo.sha;
  const pkg = opts.package || {};
  const commitHashLength = opts.commitHashLength || 4;

  return {
    PKG_NAME: pkg.name || '-',
    AUTHOR: pkg.author ? `${pkg.author}`.replace('@', '[#]') : null,
    VERSION: pkg.version || '0.0.0',
    NODE_ENV: process.env.NODE_ENV,
    BUILD_TIME: dayjs().format('YYYYMMDD-HHmmss'),
    COMMIT_HASH: commitHash ? commitHash.substr(0, commitHashLength) : '0000',
  };
};

class GenBuildInfoWebpackPlugin {
  constructor(opts) {
    const PROJECT_ROOT_DIR = path.resolve();
    const PROJECT_PUBLIC_DIR = `${PROJECT_ROOT_DIR}/public`;

    this.opts = {
      package: {},
      fileDir: PROJECT_PUBLIC_DIR,
      fileName: 'buildinfo.json',
      commitHashLength: 4,
      ...opts,
    };
  }

  apply(compiler) {
    compiler.hooks.afterPlugins.tap(PLUGIN_NAME, () => {
      const buildInfo = getBuildInfo({
        package: this.opts.package,
        commitHashLength: this.opts.commitHashLength,
      });

      // console.log('\n✨ ${PLUGIN_NAME}\n\n', buildInfo, '\n');

      const { fileDir, fileName } = this.opts;

      fs.writeFileSync(
        path.resolve(fileDir, fileName),
        JSON.stringify(buildInfo, null, 2),
      );
    });
  }
}

module.exports = GenBuildInfoWebpackPlugin;

// use for Next.js env
module.exports.getBuildInfo = getBuildInfo;
