import { colors } from "styles/theme";
import Color, { Container, ColorWraper, Wrapper } from "./styles";

const background = ["dark", "light"];

const Pallete = () => (
  <Wrapper>
    <h1>Pallete</h1>
    {background.map(bgType => (
      <>
        {Object.entries(colors).map(([type, colorsS]) => (
          <>
            {" "}
            <h1>{type}</h1>
            <Container type={bgType}>
              {Object.keys(colorsS).map(color => (
                <ColorWraper>
                  {color}
                  <Color key={colorsS[color]} color={colorsS[color]} />
                  {colorsS[color]}
                </ColorWraper>
              ))}
            </Container>
          </>
        ))}
      </>
    ))}
  </Wrapper>
);

export default Pallete;
