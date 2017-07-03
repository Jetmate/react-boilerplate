var path = require('path')

var APP_DIR = path.resolve('src')
var BUILD_DIR = path.resolve('www')

module.exports = {
  entry: path.resolve(APP_DIR, 'main.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  devServer: {
    hot: true,
    contentBase: BUILD_DIR
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader',
        options: {
          'presets' : ['es2015', 'stage-0', 'react']
        }
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/, 
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  }
}
