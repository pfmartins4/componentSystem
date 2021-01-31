const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "../");
const APP_ENTRY = path.join(PROJECT_ROOT, "src");
function resolveJsconfigPathsToAlias() {
  const { paths } = require("../jsconfig.json").compilerOptions; // eslint-disable-line global-require
  const aliases = {};
  console.log(PROJECT_ROOT);
  Object.keys(paths).forEach(item => {
    const key = item.replace("/*", "");
    const value = path.join(APP_ENTRY, paths[item][0].replace("/*", ""));

    aliases[key] = value;
  });

  return aliases;
}
module.exports = {
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, "dist"),
  appEntry: APP_ENTRY,
  resolvedAlias: resolveJsconfigPathsToAlias(),
};
