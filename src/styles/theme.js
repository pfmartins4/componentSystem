/* eslint-disable import/no-mutable-exports */
import  darken from "helpers/colors/darken";
import lighten from "helpers/colors/lighten";
import defaultTheme from "./defaultTheme.json";
import mergeObj from "helpers/objects/mergeObj";
 const context = require.context("../../", false, /\.json$/, "sync");

let borders;
let colors;
let font;
let paddings;

const generateJsonTheme = () => {
  let themeOverWrite = {};
  for (const fileName of context.keys()) {
    if (fileName === "./theme.json") {
      themeOverWrite = context(fileName) ;
    }
  }

  const theme = mergeObj(defaultTheme, themeOverWrite);
 
  theme.colors = Object.keys(theme.colors).reduce((acc, color) => ({
    ...acc, 
    [color]: {
      light: theme.colors[color]?.light || lighten(10, theme.colors[color].default),
      default: theme.colors[color].default,
      dark: theme.colors[color]?.dark || darken(10, theme.colors[color].default)
     }
   }), {}
   );
  
  ({ borders, colors, font, paddings } = theme);
 
  return theme;
};
const theme = generateJsonTheme();


const sizeMultiplier = (multiplier, prop) => {
  const value = parseFloat(prop.match(/(\d+\.{0,1}\d+)|\d+/));
  const returnable = prop.replace(value, multiplier * value);
  return returnable;
};

export default theme;
export { colors, font, borders, paddings, sizeMultiplier };
