import Icon from "./Icon";
import { iconNames } from "./index";
/* import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from "@storybook/addon-knobs"; */

export default {
  component: Icon,
  title: "Desing System/Icon",
  /* decorators: [withKnobs], */
};

export const allIcons = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "center",
    }}
  >
    {iconNames.map(icon => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "5px",
          width: "250px",
          height: "60px",
          padding: "20px 0",
          background: "#efefef",
          borderRadius: "0.25rem",
          justifyContent: "space-around",
        }}
      >
        <Icon>{icon}</Icon>
        <div>{icon}</div>
      </div>
    ))}
  </div>
);

export const iconWithKnobs = () => {
  /* const groupId = "props"; */
  /* const color = select(
    "color",
    [
      "black",
      "grey",
      "white",
      "primary",
      "secondary",
      "success",
      "warn",
      "danger",
    ],
    "black",
    groupId
  );
  const icon = select("icon name", iconNames, "home", groupId);
  return <Icon color={color}>{icon}</Icon>; */
};
