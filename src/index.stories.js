import Btn from "./index";

export default {
  component: Btn,
  title: "Desing System/Btn",
  argTypes: {
    onClick: {
      action: "clicked",
    },
    children: {
      control: "Btn",
    },
    icon: {
      control: {
        type: "select",
        options: "batata",
      },
    },
  },
};

export const Batn = ({
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
    <Btn
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
    </Btn>
  );
};
