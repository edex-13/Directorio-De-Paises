const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
      clean: true,
   },
   mode: 'development',
   resolve: {
      extensions: ['.js'],
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
                  options: {minimize: true},
               },
            ],
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: miniCssExtractPlugin.loader,
                  options: {
                     publicPath: '../',
                  },
               },
               'css-loader',
            ],
         },
      ],
   },
   plugins: [
      new htmlWebPackPlugin({
         injet: true,
         template: './public/index.html',
         filename: './index.html'
      }),
      new miniCssExtractPlugin({
         filename: 'styles/[name][contenthash].css',
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      historyApiFallback: true,
      port: 3000,
      open: true,
   },
};
