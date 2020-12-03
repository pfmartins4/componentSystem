/* eslint-disable import/no-mutable-exports */
import { lighten, darken } from "./helpers/coloring";
import defaultTheme from "./defaultTheme.js";

const context = require.context("../../", false, /\.json$/, "sync");

let colors;
let paddings;
let borders;
let font;

const generateJsonTheme = () => {
  let themeOverWrite;
  for (const fileName of context.keys()) {
    if (fileName === "./theme.js") {
      themeOverWrite = context(fileName);
    }
  }
  colors = !themeOverWrite?.colors
    ? defaultTheme.colors
    : Object.keys(defaultTheme.colors).reduce(
        (acc, color) => ({
          ...acc,
          [color]: {
            light:
              (themeOverWrite.colors[color] &&
                (themeOverWrite.colors[color].light ||
                  (themeOverWrite.colors[color].default &&
                    lighten(10, themeOverWrite.colors[color].default)))) ||
              lighten(10, defaultTheme.colors[color].default),
            default:
              (themeOverWrite.colors[color] &&
                themeOverWrite.colors[color].default) ||
              defaultTheme.colors[color].default,
            dark:
              (themeOverWrite.colors[color] &&
                (themeOverWrite.colors[color].dark ||
                  (themeOverWrite.colors[color].default &&
                    darken(10, themeOverWrite.colors[color].default)))) ||
              darken(10, defaultTheme.colors[color].default),
          },
        }),
        {}
      );

  paddings = !(themeOverWrite && themeOverWrite.paddings)
    ? defaultTheme.paddings
    : Object.keys(defaultTheme.paddings).reduce(
        (acc, paddingSize) => ({
          ...acc,
          [paddingSize]:
            themeOverWrite.paddings[paddingSize] ||
            defaultTheme.paddings[paddingSize],
        }),
        {}
      );
  borders = !(themeOverWrite && themeOverWrite.borders)
    ? defaultTheme.borders
    : Object.keys(defaultTheme.borders).reduce((acc, borderSize) => {
        if (borderSize !== "radius") {
          return {
            ...acc,
            [borderSize]:
              themeOverWrite.borders[borderSize] ||
              defaultTheme.borders[borderSize],
          };
        }
        return !themeOverWrite.borders.radius
          ? { ...acc, radius: defaultTheme.borders.radius }
          : {
              ...acc,
              radius: Object.keys(defaultTheme.borders.radius).reduce(
                (acc, radiusSize) => ({
                  ...acc,
                  [radiusSize]:
                    themeOverWrite.borders.radius[radiusSize] ||
                    defaultTheme.borders.radius[radiusSize],
                }),
                {}
              ),
            };
      }, {});
  font = !(themeOverWrite && themeOverWrite.font)
    ? defaultTheme.font
    : Object.keys(defaultTheme.font).reduce((acc, key) => {
        if (key === "family") {
          return {
            ...acc,
            [key]: themeOverWrite.font[key] || defaultTheme.font[key],
          };
        }
        return !themeOverWrite.font[key]
          ? { ...acc, radius: defaultTheme.font[key] }
          : {
              ...acc,
              radius: Object.keys(defaultTheme.font[innerKey]).reduce(
                (acc, innerKey) => ({
                  ...acc,
                  [innerKey]:
                    themeOverWrite.font.radius[innerKey] ||
                    defaultTheme.font.radius[innerKey],
                }),
                {}
              ),
            };
      }, {});
  return { colors, borders, paddings };
};
const theme = generateJsonTheme();
const sizeMultiplier = (multiplier, prop) => {
  const value = parseFloat(prop.match(/(\d+\.{0,1}\d+)|\d+/));
  const returnable = prop.replace(value, multiplier * value);
  return returnable;
};

export default theme;
export { colors, font, borders, paddings, sizeMultiplier };
