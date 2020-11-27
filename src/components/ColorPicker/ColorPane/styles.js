import styled from "styled-components";
import { borders, colors } from "styles/theme";

const ColorPane = styled.div.attrs(({ color }) => ({
  style: {
    background: color,
  },
}))`
  width: 200px;
  height: 200px;
  border-radius: ${borders.radius.md};
  position: relative;
`;

export const BlackPane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${borders.radius.md};
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export const WhitePane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${borders.radius.md};
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
`;

export const ThumbNail = styled.div.attrs(({ xPosition, yPosition }) => ({
  style: {
    top: `${yPosition}%`,
    left: `${xPosition}%`,
  },
}))`
  z-index: 1;
  position: absolute;
  width: 5px;
  height: 5px;
  border: ${borders.lg} ${colors.white.dark};
  border-radius: 50%;
  background: none;
`;

export default ColorPane;
