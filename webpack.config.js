const path = require('path');

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
         }
      ]
   }
};
