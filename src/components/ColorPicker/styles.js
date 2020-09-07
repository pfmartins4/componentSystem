import styled from "styled-components";
import { paddings, colors, borders } from "/styles/theme";
export default styled.div`
  display: grid;
  grid-template:
    "colorPane hue alpha" 3fr
    "input  checker checker" 1fr
    ". . btn";
  padding: ${paddings.sm};
  background: ${colors.white.dark};
  grid-gap: ${paddings.md};
  border-radius: ${borders.radius.md};
  box-shadow: 1px 1px 2px ${colors.black.light};
  .colorPane {
    width: 200px;
    height: 200px;
    grid-area: colorPane;
  }
  .hueBar {
    grid-area: hue;
  }
  .checker {
    grid-area: checker;
  }
`;
