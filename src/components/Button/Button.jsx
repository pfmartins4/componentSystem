import React, {useRef, useEffect} from "react";
import useFocusWithin from "/styles/helpers/focusWithin";
import PropTypes from 'prop-types';


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
    size
    }) => {
        const ref = useRef(null);
        const hasFocusWithin = useFocusWithin(ref);
        return (href ? 
        <a 
        href={href}
        className={`${className} ${hasFocusWithin ? "focusWithin" : ""}`}
        >
            {children}
        </a> :
        <button 
        className={`${className} ${hasFocusWithin ? "focusWithin" : ""}`} 
        ref={ref}
        /* onClick={onClick} */
        >
            {children}
        </button>
)};

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
    size: "md"
}

Button.propTypes = {
    /**
     * Defines the type of corner
     */
    borderRadius: PropTypes.oneOf(["sm", "md", "lg", "rounded"]),
    /**
     * The button children is its label. 
     *  Can be used any valid jsx tag,
     * though is not recomended
     */
    children: PropTypes.string,
    /**
     *  Defines the color of text and backgroudn
     *  acording to the type
     */
    color: PropTypes.oneOf(["primary", "secondary", "success", "warn", "danger"]),
    href: PropTypes.string,
    /**
     * Add a icon before the label
     */
    icon: PropTypes.string,
    /**
     *  Defines the size of the button
     */
    onClick: function(props, propName, component) {
        if(props.href && props.onClick) {
            return new Error(
                "Invalid prop `"+propName+
                "` of value `"+props[propName]+
                "` supplied to `"+component+
                "`, expected `undefined` while the prop `href` is defined"
            )
        }
        if(!props.href && !props.onClick) {
            return new Error(
                "Invalid prop `"+propName+
                "` of value `"+props[propName]+
                "` supplied to `"+component+
                "`, expected a `function`"
            )
        }
        if(!props.href && props.onClick) {

        }
    },
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    /** 
     * Defines the button fill in and text
     * default, outlined, text or link
     */
    type: PropTypes.oneOf(["default", "outlined", "text", "link"]),



}
/* fill: "default",
size: "md",
rounded: false,
borderRadius: "md",
isDark: false,
icon: undefined */

export default Button;



