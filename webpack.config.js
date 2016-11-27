const webpack = require('webpack');
const path = require('path');


module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    path.join(__dirname, 'app/App')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: './js/bundle.js',
    publicPath: 'http://www.daviepoplarcapital.com/'
    // publicPath: 'http://isenrich.io/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loaders: ['babel']
      }, { 
        test: /\.json$/i, 
        loader: 'json'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/images/[name].[ext]'
      }, {
        test: /\.pdf/i,
        loader: 'file-loader?name=/docs/[name].[ext]'
      }
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
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ]
};
