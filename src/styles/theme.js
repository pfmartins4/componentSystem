import { lighten, darken } from "./helpers/coloring"
import defaultTheme from "./defaultTheme"
const context = require.context("../../", false, /\.json$/, "sync")

let colors
const theme = (() => {
  let themeOverWrite
  for (const fileName of context.keys()) {
    if (fileName === "./theme.json") {
      themeOverWrite = context(fileName)
    }
  }
  console.log(themeOverWrite.colors)
  colors = !(themeOverWrite && themeOverWrite.colors)
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
      )
  console.log({ colors, themeOverWrite })
})()

const sizeMultiplier = (multiplier, prop) => {
  const value = parseFloat(prop.match(/(\d+\.{0,1}\d+)|\d+/))
  const returnable = prop.replace(value, multiplier * value)
  return returnable
}

const paddings = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
}

const borders = {
  no: "none",
  sm: "1px solid",
  md: "2px solid",
  lg: "3px solid",
  radius: {
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.50rem",
  },
}

const font = {
  family: "verdada",
  size: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
  },
  weight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
}

/* const theme = {
    colors, font, borders, paddings
} */

export default theme
export { colors, font, borders, paddings, sizeMultiplier }
