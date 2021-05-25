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
   resolve: {
      extensions: ['.js']
   },
   module:{
      rules:[
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
               loader: 'babel-loader'
            }
         },
         {
            test: /\.html$/,
            use:[
               {
                  loader:'html-loader',
                  options: {minimize: true},
               },
            ]
         },
         {
            test: /\.css$/,
            /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
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
         {
            test: /\.woff$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: 'assets/fonts/[name][contenthash].[ext]',
                  },
               },
            ],
         },
         {
            test: /\.svg$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: 'assets/images/[name][contenthash].[ext]',
                  },
               },
            ],
         },
      ]
   },
   plugins:[
      new htmlWebPackPlugin({
         injet:true,
         template: path.resolve(__dirname,'public/index.html'),
         filename: './index[contenthash].html'
      }),
      new miniCssExtractPlugin({
         filename: 'styles/[name][contenthash].css',
      }),
   ]
};
