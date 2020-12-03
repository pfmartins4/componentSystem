import Pallete from "components/Pallete";
import Button from "components/Button/Button";
import GlobalStyle from "styles/globals";
import Styles from "components/Button/styles.js";

const App = () => (
  <>
    <Pallete />
    <GlobalStyle />
    <div>
      <Pallete />
      <Button icon="home" />
      <Styles>Comida</Styles>
    </div>
  </>
);

export default App;
