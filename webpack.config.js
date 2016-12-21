const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
    path.join(__dirname, 'app/Main.js')
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
    // publicPath: 'http://www.daviepoplarcapital.com/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.scss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?outputStyle=expanded'
          // 'autoprefixer?browsers=last 3 versions',
        ]
      }, { 
        test: /\.json$/i, 
        loader: 'json'
      }, {
        test: /\.(pdf|vcf|docx?)$/i,
        loader: 'file-loader?name=/resources/[name].[ext]'
      }, {
        // test: /\.(jpe?g|png|gif|svg|woff2?|eot|ttf)(?.*$|$)?/i,
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/i,
        loader: 'url?limit=100000&name=[name].[ext]'
        // loader: 'file-loader?name=/images/[name].[ext]'
      }
    ]
  },
  watch: true,
  devtool: 'cheap-eval-source-map',
  devServer: {
    // contentBase: './public',
    inline: true,
    port: 8100
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};


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
