const path = require('path');

     module.exports = {
       entry: './src/index.js',
       output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
         clean: true,
       },
       devtool: 'source-map',
       mode: 'development',
       devServer: {
         static: './dist',
         open: true,
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
             test: /\.(png|jpe?g|gif|svg)$/i,
             type: 'asset/resource',
           },
           {
             test: /\.css$/,
             use: ['style-loader', 'css-loader'],
           },
         ],
       },
     };