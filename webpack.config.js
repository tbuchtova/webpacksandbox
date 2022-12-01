module.exports = {
    entry: './src/index.js',
    devtool: false,
    output: {
      filename: 'app.js',
    },
    devServer: {
      historyApiFallback: true,
      port: 4000,
      devMiddleware: {
        writeToDisk: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]'
          }
        },
        {
          test: /\.html$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]'
          },
        },
        {
          test: /\.ico$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].ico'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ]
    }
  };