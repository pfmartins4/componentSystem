import React from "react";




const Button = ({
     children, 
     type, 
     fill, 
     size, 
     icon, 
     className,
     rounded,
     borderRadius,
     isDark,
     href 
    }) => (href ? 
        <a href={href}>
            {children}
        </a> :
        <button className={className}>
            {children}
        </button>
);

export default Button;



