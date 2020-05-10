
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
    info: {
        success: "#7dba73",
        danger: "#c25a46",
        warning: "#d68024",
    },
    functional: {
        transparent: "transparent"
    }
}


const paddings = {
    sm: "0.25em",
    m: "0.5em",
    l: "0.75em"
}

const borders = {
    no: "none",
    sm: "1px solid",
    m: "2px solid",
    l: "3px solid",
    smRadius: "0.25em",
    mRadius: "0.50em",
    lRadius: "0.75em"
}

const font = {
    family: "verdada",
    size: {
        sm: "0.75em",
        m: "1em",
        l: "1.25em"
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
export { colors, font, borders, paddings }