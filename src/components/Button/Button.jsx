import { useRef } from "react";
import useFocusVisible from "helpers/useFocusVisible";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import { colors } from "styles/theme";

/**
 *
 * Simple, yet complete button component
 *
 */
const Button = ({
  borderRadius,
  className,
  children,
  color,
  href,
  isDark,
  icon,
  onClick,
  type,
  size,
}) => {
  const ref = useRef(null);
  const hasFocusVisible = useFocusVisible(ref);
  return href ? (
    <a
      href={href}
      className={`${className} ${hasFocusVisible ? "focusVisible" : ""}`}
      ref={ref}
    >
      {icon && (
        <Icon size={size} color={color}>
          {icon}
        </Icon>
      )}{" "}
      {children}
    </a>
  ) : (
    <button
      className={`${className} ${hasFocusVisible ? "focusVisible" : ""}`}
      ref={ref}
      onClick={onClick}
    >
      {icon && (
        <Icon size={size} color={color}>
          {icon}
        </Icon>
      )}{" "}
      {children}
    </button>
  );
};

Button.defaultProps = {
  borderRadius: "sm",
  className: undefined,
  children: undefined,
  color: "primary",
  href: undefined,
  isDark: false,
  icon: undefined,
  onClick: undefined,
  type: "default",
  size: "md",
};

Button.propTypes = {
  /**
   * Defines the type of corner
   */
  borderRadius: PropTypes.oneOf(["sm", "md", "lg", "rounded"]),
  classNAme: PropTypes.string,
  /**
   * The button children is its label.
   *  Can be used any valid jsx tag,
   * though is not recomended
   */
  children: PropTypes.node,
  /**
   *  Defines the color of text and backgroudn
   *  acording to the type
   */
  color: PropTypes.oneOf([
    "black",
    "grey",
    "white",
    "primary",
    "secondary",
    "terciary",
    "success",
    "warn",
    "danger",
  ]),
  href: PropTypes.string,
  /**
   * Add a icon before the label
   */
  icon: PropTypes.string,
  /**
   *  Defines the size of the button
   */
  onClick: function (props, propName, component) {
    if (props.href && props.onClick) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` of value `" +
          props[propName] +
          "` supplied to `" +
          component +
          "`, expected `undefined` while the prop `href` is defined"
      );
    }
    if (!props.href && !props.onClick) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` of value `" +
          props[propName] +
          "` supplied to `" +
          component +
          "`, expected a `function`"
      );
    }
    if (!props.href && props.onClick) {
    }
  },
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Defines the button fill in and text
   * default, outlined, text or link
   */
  type: PropTypes.oneOf(["default", "outlined", "text", "link"]),
};

export default Button;
