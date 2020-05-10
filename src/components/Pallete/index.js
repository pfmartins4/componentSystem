import React from "react";
import { colors } from "/styles/theme";
import Color, { Container, ColorWraper, Wrapper } from "./styles";

const background = ["dark", "light"];

const Pallete = () => (

    <Wrapper>
        <h1>Pallete</h1>
        {background.map(bgType =>
            <>
                {Object.entries(colors).map(([type, colors]) => (
                    <>    <h1>{type}</h1>
                        <Container type={bgType}>
                            {Object.keys(colors).map(color =>
                                (<ColorWraper>
                                    {color}
                                    <Color key={colors[color]} color={colors[color]} />
                                    {colors[color]}
                                </ColorWraper >
                                )
                            )}
                        </Container>
                    </>
                ))}
            </>
        )}
    </Wrapper>
);

export default Pallete


