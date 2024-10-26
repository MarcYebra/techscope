const { environment } = require('@rails/webpacker');

const sassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // Prefer `dart-sass` for compatibility
        implementation: require('sass'),
      },
    },
  ],
};

environment.loaders.append('sass', sassLoader);

module.exports = environment;
