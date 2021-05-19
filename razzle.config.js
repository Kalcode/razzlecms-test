const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const razzleHeroku = require('razzle-heroku');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // eslint-disable-next-line global-require

    // Process Graphql extensions
    const newConfig = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
          }
        ]
      }
    };

    // Find File Loader and remove catch-all on .gqp and .graphql files
    const fileLoader = newConfig.module.rules.find(
      rule => rule.loader && rule.loader.indexOf('file-loader') > -1
    );

    fileLoader.exclude.push(/\.(graphql|gql)$/);

    if (target === 'web') {
      return razzleHeroku(
        {
          ...newConfig,
          plugins: [
            ...newConfig.plugins,
            new LoadablePlugin({
              writeToDisk: {
                filename: path.resolve('./build/')
              }
            })
          ]
        },
        { target, dev },
        webpack
      );
    }

    return razzleHeroku(newConfig, { target, dev }, webpack);
  }
};
