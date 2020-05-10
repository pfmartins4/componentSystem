import { createGlobalStyle } from 'styled-components'


const headers = () => {
    let headers = ``;
    for (let i = 1; i < 7; i++) headers = `${headers} h${i}${i < 6 ? "," : ""}`;
    return headers;
}

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-Black.ttf") format("truetype");
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-BlackItalic.ttf") format("truetype");
        font-weight: 900;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf") format("truetype");
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-ExtraBoldItalic.ttf") format("truetype");
        font-weight: 800;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-BoldItalic.ttf") format("truetype");
        font-weight: 700;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-SemiBoldItalic.ttf") format("truetype");
        font-weight: 600;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-Italic.ttf") format("truetype");
        font-weight: 400;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-Light.ttf") format("truetype");
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-LightItalic.ttf") format("truetype");
        font-weight: 300;
        font-style: "italic";
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-ExtraLight.ttf") format("truetype");
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: "NunitoSans";
        src: url("src/assets/fonts/NunitoSans/NunitoSans-ExtraLightItalic.ttf") format("truetype");
        font-weight: 200;
        font-style: "italic";
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
`

export default GlobalStyle;