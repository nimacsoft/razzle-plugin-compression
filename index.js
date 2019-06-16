const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const defaultOptions = {
  brotli: true,
  gzip: true,
  compressionPlugin: {},
  brotliPlugin: {
    asset: "[path].br[query]",
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.7
  }
};

function modify(baseConfig, { target, dev }, webpack, userOptions = {}) {
  const options = Object.assign({}, defaultOptions, userOptions);
  const config = Object.assign({}, baseConfig);

  const isProd = dev === false;
  const isWeb = target === "web";

  const plugins = [];

  if (options.gzip) {
    plugins.push(new CompressionPlugin(options.compressionPlugin));
  }

  if (options.brotli) {
    plugins.push(new BrotliPlugin(options.brotliPlugin));
  }

  if (isWeb && isProd) {
    config.plugins.push(...plugins);
  }

  return config;
}

module.exports = modify;
