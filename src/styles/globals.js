import { createGlobalStyle } from 'styled-components'
import NunitoSansBlack from "/assets/fonts/NunitoSans/NunitoSans-Black.ttf";
import NunitoSansBlackItalic from "/assets/fonts/NunitoSans/NunitoSans-BlackItalic.ttf"
import NunitoSansExtraBold from "/assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf"
import NunitoSansExtraBoldItalic from "/assets/fonts/NunitoSans/NunitoSans-ExtraBoldItalic.ttf"
import NunitoSansBold from "/assets/fonts/NunitoSans/NunitoSans-Bold.ttf"
import NunitoSansBoldItalic from "/assets/fonts/NunitoSans/NunitoSans-BoldItalic.ttf"
import NunitoSansSemiBold from "/assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf"
import NunitoSansSemiBoldItalic from "/assets/fonts/NunitoSans/NunitoSans-SemiBoldItalic.ttf"
import NunitoSansRegular from "/assets/fonts/NunitoSans/NunitoSans-Regular.ttf"
import NunitoSansItalic from "/assets/fonts/NunitoSans/NunitoSans-Italic.ttf"
import NunitoSansLigth from "/assets/fonts/NunitoSans/NunitoSans-Light.ttf"
import NunitoSansLigthItalic from "/assets/fonts/NunitoSans/NunitoSans-LightItalic.ttf"
import NunitoSansExtraLight from "/assets/fonts/NunitoSans/NunitoSans-ExtraLight.ttf"
import NunitoSansExtraLightItalic from "/assets/fonts/NunitoSans/NunitoSans-ExtraLightItalic.ttf"

const headers = () => {
    let headers = ``;
    for (let i = 1; i < 7; i++) headers = `${headers} h${i}${i < 6 ? "," : ""}`;
    return headers;
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 900;
        src: local("NunitoSans"),
            url(${NunitoSansBlack}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 900;
        src: local("NunitoSans"),
            url(${NunitoSansBlackItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 800;
        src: local("NunitoSans"),
            url(${NunitoSansExtraBold}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 800;
        src: local("NunitoSans"),
            url(${NunitoSansExtraBoldItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 700;
        src: local("NunitoSans"),
            url(${NunitoSansBold}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 700;
        src: local("NunitoSans"),
            url(${NunitoSansBoldItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 600;
        src: local("NunitoSans"),
            url(${NunitoSansSemiBold}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 600;
        src: local("NunitoSans"),
            url(${NunitoSansSemiBoldItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 400;
        src: local("NunitoSans"),
            url(${NunitoSansRegular}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 400;
        src: local("NunitoSans"),
            url(${NunitoSansItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 300;
        src: local("NunitoSans"),
            url(${NunitoSansLigth}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 300;
        src: local("NunitoSans"),
            url(${NunitoSansLigthItalic}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: normal;
        font-weight: 200;
        src: local("NunitoSans"),
            url(${NunitoSansExtraLight}) format("truetype");
    }
    @font-face {
        font-family: "NunitoSans";
        font-style: italic;
        font-weight: 200;
        src: local("NunitoSans"),
            url(${NunitoSansExtraLightItalic}) format("truetype");
    }
    html, body, div, span, p, button, a, 
    input, label, 
    ${headers()}   
    {
        background: none;
        margin: 0;
        font-family: "NunitoSans";
        font-weight: 400;
        font-style: normal;
        padding: 0;
        border: none;
    }
    #root {
        min-height: 100%;
    }
`

export default GlobalStyle;