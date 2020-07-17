import React from "react";
import Button from "./index";
import { withKnobs, text, select } from "@storybook/addon-knobs";


export default {
  component: Button,
  title: "Desing System/Button",
  decorators: [withKnobs]
};

export const buttonWithKnobs = () => {
  const groupId = "Props"
  const color = select(
    "color",
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
  const type = select(
    "type", 
    [
      "default",
      "text",
      "link",
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
  return (
        <Button 
          type={type}
          color={color}
          size={size}
          icon={icon}
          borderRadius={borderRadius}
        >
          {label}
        </Button>
)};