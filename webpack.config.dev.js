import path from 'path';

export default {
  debug: true,  // debug information as we run our build
  devtool: 'inline-source-map',
  noInfo: false, // set to 'false' to let it display a list of all the files that it's bundling
  entry: [
    path.resolve(__dirname, 'src/index') // entry point of app
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
