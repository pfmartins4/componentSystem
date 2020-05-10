import React from "react";
import Styles from "./styles";

const Icon = React.lazy(() => import("material-icons-react"))

const Button = ({ children, type, fill, size, icon }) => {
    return <Styles {...{ type, fill, size }}>{icon && <Icon icon={icon} />}{children}</Styles>
};

export default Button;


Button.defaultProps = {
    type: "primary",
    fill: "default",
    size: "m",
    icon: undefined
}