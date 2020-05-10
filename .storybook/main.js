module.exports = {
    stories: ['../src/components/**/*.stories.js', '../src/styles/*.stories.js'],
    webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};