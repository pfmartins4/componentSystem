module.exports = {
  stories: [
    "../src/components/**/*.stories.(js|mdx)",
    "../src/styles/**/*.stories.(js|mdx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    /*  {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    }, */
  ],
};
