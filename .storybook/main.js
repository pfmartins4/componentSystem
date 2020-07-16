const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    "../src/components/**/*.stories.(js|mdx)",
    "../src/styles/**/*.stories.(js|mdx)", 
  ],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    {
      name: '@storybook/addon-docs/react/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};