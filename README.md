[![npm version](https://badge.fury.io/js/razzle-plugin-compression.svg)](https://badge.fury.io/js/razzle-plugin-compression)

# razzle-plugin-compression
This package contains a plugin to compress assets with Razzle

Usage in Razzle Projects
```sh
yarn add razzle-plugin-compression --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

Using the plugin with the default options
```javascript
// razzle.config.js

module.exports = {
  plugins: ['compression'],
};
```

## With custom options:

```javascript
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'compression',
      options: {
        brotli: true,
        gzip: true,
        compressionPlugin: {},
        brotliPlugin: {
          asset: "[path].br[query]",
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.7
        }
      }
    }
  ]
};
```

Please remember that custom options will extends default options using Object.assign. Array **WILL NOT BE EXTENDED OR CONCATED**, it will override all default plugins.

## Options
brotli: *boolean* (defaults: true)

Set `brotli` to `false` if you don't want to compress with brotli compression algorithm.

#

gzip: *boolean* (defaults: true)

Set `gzip` to `false` if you don't want to compress with gzip compression algorithm.

#

compressionPlugin: *object*

default: `{}`

See [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin) options to override configs.

#

brotliPlugin: *object*

default: 

```javascript
{
  asset: "[path].br[query]",
  test: /\.(js|css|html|svg)$/,
  threshold: 10240,
  minRatio: 0.7
}
```

See [brotli-webpack-plugin](https://github.com/mynameiswhm/brotli-webpack-plugin) options to override configs.