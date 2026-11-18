const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const root = path.resolve(__dirname, '../..');

module.exports = (env = {}) => ({
  mode: env.production ? 'production' : 'development',
  context: root,
  entry: './src/module.ts',
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'module.js',
    library: { type: 'commonjs2' },
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: { loader: 'swc-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: [
    'react',
    'react-dom',
    '@grafana/data',
    '@grafana/runtime',
    '@grafana/ui',
  ],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'plugin.json', to: 'plugin.json' },
        { from: 'img', to: 'img' },
      ],
    }),
  ],
  devtool: env.production ? false : 'source-map',
});
