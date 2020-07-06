import { lighten, darken } from "./helper/coloring";
const colors = {
    greyScale: {
        black: "#212121",
        blackAlpha: "#21212180",
        darkGrey: "#3d3d3d",
        darkGreyAlpha: "#3d3d3d80",
        grey: "#707070",
        greyAlpha: "#70707080",
        lightGrey: "#808080",
        lightGreyAlpha: "#80808080",
        white: "#f5f5f5",
        whiteAlpha: "#f5f5f580"
    },
    primary: {
        light: "#f2d26f",
        default: "#edc44a",
        dark: "#dbae25",
        alpha: "#edc54a80"
    },
    secondary: {
        light: "#bf6534",
        default: "#8a4825",
        dark: "#853c15",
        alpha: "#8a482580"
    },
    success: {
        light: lighten(10,"#7dba73"),
        default: "#7dba73",
        dark: darken(10, "#7dba73")
    },
    danger: {
        light: lighten(10, "#c25a46"),
        default: "#c25a46",
        dark: darken(10, "#c25a46")
    },
    warn: {
        light: lighten(10, "#d68024"),
        default: "#d68024",
        dark: darken(10, "#d68024")
    }

}


const sizeMultiplier = (multiplier, prop) => {
    const value = parseFloat(prop.match(/(\d+\.{0,1}\d+)|\d+/));
    const returnable = prop.replace(value, multiplier*(value));
    return returnable
}

const paddings = {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem"
}

const borders = {
    no: "none",
    sm: "1px solid",
    md: "2px solid",
    lg: "3px solid",
    radius: {
        sm: "0.125rem",
        md: "0.25rem",
        lg: "0.50rem"}
}

const font = {
    family: "verdada",
    size: {
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem"
    },
    weight: {
        light: 300,
        normal: 400,
        bold: 700
    },

}





const theme = {
    colors, font, borders, paddings
}


export default theme;
export { colors, font, borders, paddings, sizeMultiplier }