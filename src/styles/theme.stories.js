import { colors } from "./theme";
import { Fragment } from "react";

export default { title: "Desing System/Theme", component: Pallete };

export const Pallete = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {colors &&
        Object.keys(colors).map(color => (
          <Fragment key={`${color}`}>
            <h2 style={{ textTransform: "capitalize" }}>{color}</h2>
            <div
              style={{
                width: "100%",
                height: "120px",
                display: "flex",
              }}
            >
              {Object.keys(colors[color]).map(tone => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "120px",
                    marginRight: "1rem",
                  }}
                  key={`${color}${tone}`}
                >
                  <span style={{ textTransform: "capitalize" }}>{tone}</span>
                  <div
                    style={{
                      border: `${colors.black.default} 1px solid`,
                      borderRadius: "0.25em",
                      width: "50px",
                      height: "50px",
                      background: colors[color][tone],
                    }}
                    key={`${color}${tone}`}
                  />
                  <span>{colors[color][tone]}</span>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
    </div>
  );
};
