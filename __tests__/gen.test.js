const fs = require('fs');
const path = require('path');
const { getBuildInfo } = require('../src/index');

const pkgRaw = require('../package.json');

const pkgInfo = {
  ...pkgRaw,
  ...{
    version: '2.71.1-hotfix-1',
    // version: '2.71.1',
  }
};


// console.log('pkgInfo', pkgRaw.version);

const versionRaw = getBuildInfo({
  package: pkgInfo
});
// const versionRaw = getBuildInfo(pkgRaw);
// console.log('versionRaw', versionRaw);

