import React from "react"
import rgb2Hsl, {
  parseRGBArray,
  parseHSLArray,
  lighten,
  darken,
} from "./helpers/coloring"
import { colors } from "./theme"
import { radios } from "@storybook/addon-knobs"

export default { title: "Desing System/Theme" }

export const Pallete = () => {
  console.log(colors)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(colors).map(color => (
        <React.Fragment key={`${color}`}>
          <h2>{color}</h2>
          <div
            style={{
              width: "100%",
              height: "60px",
              display: "flex",
            }}
          >
            {Object.keys(colors[color]).map(tone => (
              <React.Fragment key={`${color}${tone}`}>
                <div
                  style={{
                    border: `${colors.black.default} 1px solid`,
                    borderRadius: "0.25em",
                    width: "50px",
                    marginLeft: "1em",
                    height: "50px",
                    background: colors[color][tone],
                  }}
                  key={`${color}${tone}`}
                />
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
