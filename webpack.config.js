const webpack = require('webpack'),
      path = require('path');

module.exports = {
  entry: './app/Main.js',
  output: {
    path: './public',
    filename: 'js/bundle.js',
    publicPath: 'http://www.daviepoplarcapital.com/public'
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, { 
        test: /\.json$/i, 
        loader: 'json'
      }
    ]
  },
  plugins: []
}

/*
module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    path.join(__dirname, './app/app.js')
    // path.join(__dirname, './app/app.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: './js/bundle.js',
    publicPath: 'http://www.daviepoplarcapital.com/'
    // sourceMapFilename: "public/js/bundle.map"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loaders: ['babel']
      }
      // , {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: 'file-loader?name=/images/[name].[ext]'
      // }, {
      //   test: /\.pdf/i,
      //   loader: 'file-loader?name=/docs/[name].[ext]'
      // }
    ]
  },
  devServer: {
    colors: true,
    contentBase: __dirname,
    noInfo: false,
    hot: true,
    inline: true,
    port: 3000,
    host: 'localhost'
  },
  plugins: []
};
*/
