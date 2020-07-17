import React from "react"
import Icon from "./styles"
import "material-design-icons/iconfont/material-icons.css"

const Component = ({ className, size, color, children }) => (
  <Icon size={size} color={color} className={`material-icons ${className}`}>
    {children}
  </Icon>
)

Component.defaultProps = {
  size: "md",
  color: "black",
}

export default Component
