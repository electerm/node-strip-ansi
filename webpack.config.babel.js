import webpack from 'webpack'
const pack = require('./package.json')

const defaultConfig = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/strip-ansi.ts',
  output: {
    filename: 'strip-ansi.js',
    library: 'StripAnsi',
    libraryTarget: 'umd',
    globalObject: 'this' // fix window undefined issue in node
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.version': JSON.stringify(pack.version)
    })
  ]
}

export default defaultConfig
