import React from "react";
import "material-design-icons/iconfont/material-icons.css";

const Component = ({ className, size, color, children }) => (
  <i size={size} color={color} className={`material-icons ${className}`}>
    {children}
  </i>
);

Component.defaultProps = {
  size: "md",
  color: "black",
};

export default Component;
