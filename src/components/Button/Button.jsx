import React from "react";




const Button = ({ children, type, fill, size, icon, className, href,  }) => {

    return <a className={className}>{children}</a>
};

export default Button;


Button.defaultProps = {
    type: "primary",
    fill: "default",
    size: "m",
    icon: undefined
}

