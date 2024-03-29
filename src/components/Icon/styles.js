import styled from "styled-components";

import Icon from "./Icon";

import { colors, borders, font, paddings, sizeMultiplier } from "styles/theme";

import "material-design-icons/iconfont/material-icons.css";

const { size: fontSize, family } = font;

const Styles = styled(Icon)`
  @font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Outlined";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v22/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Round";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconsround/v22/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmP.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Sharp";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconssharp/v23/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvR.woff2)
      format("woff2");
  }
  /* fallback */
  @font-face {
    font-family: "Material Icons Two Tone";
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialiconstwotone/v21/hESh6WRmNCxEqUmNyh3JDeGxjVVyMg4tHGctNCu0.woff2)
      format("woff2");
  }

  color: ${({ color }) => colors[color]["default"]};

  font-size: ${({ size }) => fontSize[size]};

  line-height: ${({ size }) => fontSize[size]};
`;

export default Styles;
