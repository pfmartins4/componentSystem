import styled from "styled-components";
import { borders } from "styles/theme";

const Checker = styled.div.attrs(({ color }) => ({
  style: {
    background: color,
  },
}))`
  width: 50px;
  height: 50px;
  border-radius: ${borders.radius.sm};
`;

export default Checker;
