const path = require('path');

// your app's webpack.config.js
const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    "../src/components/**/*.stories.js","../src/styles/**/*.stories.js", "../stories/*.stories.js"
  ],
  addons: [
    "@storybook/addons",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links"
  ],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};