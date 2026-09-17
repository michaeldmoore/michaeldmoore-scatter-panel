import path from 'path';
import type { Configuration } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

const root = path.resolve(__dirname, '../..');

export default (env: { production?: boolean } = {}): Configuration => ({
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
