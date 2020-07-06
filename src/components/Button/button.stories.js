import React from "react";
import Button from "./index";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";



export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs],

 };


export const Component = ()=> {
  const groupId = "Props"
  const type = select(
    "type",
    [
      "primary",
      "secondary",
      "success",
      "warn",
      "danger"
    ],
    "primary",
    groupId
  );
  const fill = select(
    "fill", 
    [
      "default",
      "outlined"
    ],
    "default",
    groupId
  );
  const size = select(
    "size", 
    [
      "sm",
      "md",
      "lg"
    ],
    "md",
    groupId
  );
  const icon = text("Icon", "", groupId);
  const label = text("Children", "Botão", groupId);
  const rounded = boolean("Rounded", false, groupId);
  const borderRadius = select(
    "Border Radius", 
    [
      "sm",
      "md",
      "lg"
    ],
    "md",
    groupId
    )
  const isDark = boolean("Rounded", false, groupId);
  return (
    <Button 
      type={type}
      size={size}
      fill={fill}
      icon={icon}
      rounded={rounded}
      borderRadius={borderRadius}
    >
      {label}
    </Button>
)};

