import Button from "./index";
import icons from "components/Icon/iconNames";
import { colors } from "styles/theme";

export default {
  component: Button,
  title: "Desing System/Button",
  argTypes: {
    onClick: {
      action: "clicked",
    },
    children: {
      control: "Button",
    },
    icon: {
      control: {
        type: "select",
        options: icons,
      },
    },
  },
};

export const button = ({
  borderRadius,
  children,
  className,
  color,
  href,
  icon,
  isDark,
  onClick,
  type,
  size,
}) => {
  return (
    <Button
      borderRadius={borderRadius}
      className={className}
      color={color}
      href={href}
      icon={icon}
      isDark={isDark}
      onClick={onClick}
      type={type}
      size={size}
    >
      {children}
    </Button>
  );
};
