var webpack = require('webpack');

const config = {
  mode: 'development',
  output: {
    filename: 'react-zonetimer.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, 
          {loader: 'css-loader'} 
        ]
      },    
    ],

  },
  plugins: [],
  externals: {
    react: 'react',
  }
}

module.exports = config;