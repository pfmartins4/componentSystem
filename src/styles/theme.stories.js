
import React from 'react';
import rgb2Hsl, { parseRGBArray, parseHSLArray, lighten, darken } from './helpers/coloring';
import { colors } from './theme';
import { radios } from '@storybook/addon-knobs';

export default { title: 'Desing System/Theme' };

export const Pallete = () => {
   
    return ( 
    <>  
    {Object.keys(colors).map(color => 
        <>
        <h2>{color}</h2>
        <div 
        style={{
            width: "100%",
            height: "50px",
            display: "flex"
        }}
        key={color}
        >
            {Object.keys(colors[color]).map(tone => 
                <>
                <div
                    style={{
                        borders: `${colors.greyScale.black} 1px solid`,
                        borderRadius: "0.25em",
                        width: "50px",
                        marginLeft: "1em",
                        height: "50px",
                        background: colors[color][tone]
                    }}
                    key={`${color}${tone}`}
                />
                </>)}
                
            </div>
            </>
    )
    }    
    </>
)}


