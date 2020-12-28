import Pallete from "components/Pallete";
import Button from "components/Button/Button";
import GlobalStyle from "styles/globals";
import Styles from "components/Button/styles.js";
import TextInput from "components/Form/TextInput";

const App = () => (
  <>
    <TextInput label="Text Input" />
    <TextInput label="Text Input" />
    <Pallete />
    <GlobalStyle />
    <div>
      <Button icon="home" />
      <Styles>Comida</Styles>
    </div>
  </>
);

export default App;
