
import React from 'react';
import rgb2Hsl, { parseRGBArray, parseHSLArray, lighten, darken } from './helper/coloring';
export default { title: 'Theme ' };

export const Pallete = () => {
    /* const a = rgb2Hsl(50, 20, 10); */
    const c1 = "rgb(50, 0, 10)"
    const c2 = "#321e0a"
    const c3 = "hsl(30, 80%, 12%)"
    parseRGBArray(c1)
    parseRGBArray(c2)
    parseHSLArray(c3)

    
    return ( 
    <>  
        <div style={{
            borders: "black",
            width: "50px",
            height: "50px",
            background: c1
        }}/>
        <div style={{
            borders: "black",
            width: "50px",
            height: "50px",
            background: darken(10, c1)
        }}/>
    </>
)}


