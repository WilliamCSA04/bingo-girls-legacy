const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
