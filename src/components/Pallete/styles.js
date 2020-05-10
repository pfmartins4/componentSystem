import React from "react";
import styled from "styled-components";
import { paddings, borders, colors } from "/styles/theme";

const { greyScale: { black, grey, darkGrey, white } } = colors

const Styles = styled.div`
    width: 50px;
    height: 50px;
    border: ${borders.sm} ${black};
    border-radius: ${borders.smRadius};
    background: ${({ color }) => (color)};
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: ${paddings.m};
    background: ${({ type }) => type === "dark" ? darkGrey : white};
    color: ${({ type }) => type === "dark" ? white : black};
    
`;

const ColorWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    height: 100px;
    &:not(:last-of-type){
        margin-bottom: ${paddings.m};
        margin-right: ${paddings.l}
    }
`;

const Wrapper = styled.div`
    background: ${white};
    width: 535px;
`;
export { Container, ColorWraper, Wrapper }
export default Styles;