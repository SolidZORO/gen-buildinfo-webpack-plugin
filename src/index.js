const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const getRepoInfo = require('git-repo-info');

const PLUGIN_NAME = 'GenBuildInfoWebpackPlugin';


// e.g.
// ['0', '0', '5']  5
// ['1', '0', '0']  1 000 000
// ['1', '1', '55'] 1 001 055
// ['2', '18', '5'] 2 018 005
// ['2', '51', '0'] 2 051 000
const calcBuildNumber = (versionStr) => {
  if (!versionStr) return 0;
  if (!/\d{0,3}\.\d{0,3}\.\d{0,3}/.test(versionStr)) return 0;

  let vn = 0;

  // if has e.g. `2.71.1-hotfix-1` or `2.71.1-XXXX`, ONLY take [0]
  if(versionStr.includes('-')) {
    versionStr =  versionStr.split('-')[0];
  }

  versionStr.split('.')?.forEach((v, i) => {
    if (i === 0) vn += Number(v) * 1000000;
    if (i === 1) vn += Number(v) * 1000;
    if (i === 2) vn += Number(v);
  });

  return vn;
};

const getBuildInfo = (opts) => {
  const repoInfo = getRepoInfo();
  // console.log('---- repoInfo ----\n', repoInfo);
  const commitHash = repoInfo.sha;
  const pkg = opts.package || {};
  const commitHashLength = opts.commitHashLength || 4;

  const VERSION = pkg.version || '0.0.0';

  return {
    PKG_NAME: pkg.name || '-',
    AUTHOR: pkg.author ? `${pkg.author}`.replace('@', '[#]') : null,
    VERSION,
    BUILD_NUMBER: calcBuildNumber(VERSION), // output number
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
module.exports.calcBuildNumber = calcBuildNumber;
