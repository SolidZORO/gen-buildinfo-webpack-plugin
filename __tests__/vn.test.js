const { calcBuildNumber } = require('../src/index');

console.log(calcBuildNumber('2.71.1'));
console.log(calcBuildNumber('2.71.1-hotfix-1'));
console.log(calcBuildNumber('2.71.1-beta'));
