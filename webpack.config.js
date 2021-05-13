const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
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
            test: /\.htmñ$/,
            use:[
               {
                  loader:'html-loader',
                  options: {minimize: true},
               },
            ]
         }
      ]
   },
   plugins:[
      new htmlWebPackPlugin({
         injet:true,
         template: path.resolve(__dirname,'public/index.html'),
         filename: './index[contenthash].html'
      })
   ]
};
