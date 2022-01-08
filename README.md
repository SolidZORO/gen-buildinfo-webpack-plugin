# gen-buildinfo-webpack-plugin

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

Generate a buildinfo.json file to public directory.


## Installation

```sh
# Webpack (CRA)
yarn add -D gen-buildinfo-webpack-plugin
 
# Next.js
yarn add gen-buildinfo-webpack-plugin 
```


## Usage

### Webpack (CRA)

```javascript
// webpack.config.js
const GenBuildinfoWebpackPlugin = require('gen-buildinfo-webpack-plugin');

new GenBuildinfoWebpackPlugin({
  package: require('./package.json'),
  //
  // [Options]
  // fileDir: PROJECT_PUBLIC_DIR,
  // fileName: 'buildinfo.json',
  // commitHashLength: 4, 
})
```

### Next.js

```javascript
// next.config.js
// use `process.env.NEXT_PUBLIC_BUILD_INFO`
const { getBuildInfo } = require('gen-buildinfo-webpack-plugin');

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_INFO: JSON.stringify(
      getBuildInfo({ package: require('./package.json') }),
    ),
  },
  webpack(webpackConfig) {
    return webpackConfig;
  },
  // ....
}
```


## License

MIT © [Jason Feng][author-url]

<!-- badges -->

[author-url]: https://github.com/SolidZORO


[mit-img]: https://img.shields.io/npm/l/gen-buildinfo-webpack-plugin.svg?style=flat&colorA=000000&colorB=000000

[mit-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/gen-buildinfo-webpack-plugin?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/gen-buildinfo-webpack-plugin


[size-img]: https://img.shields.io/bundlephobia/minzip/gen-buildinfo-webpack-plugin?label=bundle&style=flat&colorA=000000&colorB=000000

[size-url]: https://www.npmjs.com/package/gen-buildinfo-webpack-plugin


[download-img]: https://img.shields.io/npm/dt/gen-buildinfo-webpack-plugin.svg?style=flat&colorA=000000&colorB=000000

[download-url]: https://www.npmjs.com/package/gen-buildinfo-webpack-plugin


[build-img]: https://github.com/SolidZORO/gen-buildinfo-webpack-plugin/workflows/badge.svg

[build-url]: https://github.com/SolidZORO/gen-buildinfo-webpack-plugin/actions
