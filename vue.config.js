const zlib = require("zlib");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true,
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true
          },
          output: {
            comments: false,
            beautify: false,
            indent_level: 0
          },
          mangle: true
        },
        sourceMap: false,
        parallel: true
      }),
      new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: true
      })
    ]
  },
  productionSourceMap: false
}
