# gen-buildinfo-webpack-plugin

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

🚧 WIP Project


## Installation

```sh
yarn add -D gen-buildinfo-webpack-plugin
```


## Usage

```javascript
new BuildInfoWebpackPlugin({
  package: require('../../package.json'),
  //
  // [Options]
  // commitHashLength: 4, 
  // buildFileDir: PROJECT_PUBLIC_DIR,
  // buildFileName: 'buildinfo.json',
})
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
