const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8085,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myva_et',
      filename: 'remoteEntry.js',
      exposes: {
        './ETIndex': './src/index',
      },
      shared: {
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
