# buildinfo-webpack-plugin

[![version][npm-img]][npm-url]
[![license][mit-img]][mit-url]
[![size][size-img]][size-url]
[![download][download-img]][download-url]

🚧 WIP Project


## Installation

```sh
yarn add -D buildinfo-webpack-plugin
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


[mit-img]: https://img.shields.io/npm/l/buildinfo-webpack-plugin.svg?style=flat&colorA=000000&colorB=000000

[mit-url]: ./LICENSE


[npm-img]: https://img.shields.io/npm/v/buildinfo-webpack-plugin?style=flat&colorA=000000&colorB=000000

[npm-url]: https://www.npmjs.com/package/buildinfo-webpack-plugin


[size-img]: https://img.shields.io/bundlephobia/minzip/buildinfo-webpack-plugin?label=bundle&style=flat&colorA=000000&colorB=000000

[size-url]: https://www.npmjs.com/package/buildinfo-webpack-plugin


[download-img]: https://img.shields.io/npm/dt/buildinfo-webpack-plugin.svg?style=flat&colorA=000000&colorB=000000

[download-url]: https://www.npmjs.com/package/buildinfo-webpack-plugin


[build-img]: https://github.com/SolidZORO/buildinfo-webpack-plugin/workflows/badge.svg

[build-url]: https://github.com/SolidZORO/buildinfo-webpack-plugin/actions
