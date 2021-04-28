import styled from "styled-components";
import {
  parseRGBArray,
  parseHSLArray,
  lighten,
  darken,
  hsl2Rgb,
  parseHex,
} from "styles/helpers/coloring.js";
import { colors, borders } from "styles/theme";

const red = parseHex(hsl2Rgb(0, 100, 50));
const yellow = parseHex(hsl2Rgb(60, 100, 50));
const green = parseHex(hsl2Rgb(120, 100, 50));
const ciano = parseHex(hsl2Rgb(180, 100, 50));
const blue = parseHex(hsl2Rgb(240, 100, 50));
const magenta = parseHex(hsl2Rgb(300, 100, 50));
const red2 = parseHex(hsl2Rgb(360, 100, 50));

const HueBar = styled.div`
  width: 10px;
  height: 100%;
  position: relative;
  border-radius: ${borders.radius.md};
  background: linear-gradient(
    ${red},
    ${yellow},
    ${green},
    ${ciano},
    ${blue},
    ${magenta},
    ${red2}
  );
`;

export const HueThumbNail = styled.div`
  position: absolute;
  top: ${({ position }) =>
    position - 5 > 0 ? Math.min(position - 5, 95) : -2}%;
  width: 140%;
  left: -20%;
  border-radius: ${borders.radius.sm};
  background: ${colors.white.dark}f0;
  border: ${borders.sm} ${colors.grey.dark} solid;
  height: 10%;
`;

export default HueBar;
