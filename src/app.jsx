import React from "react";
import { render } from "react-dom";
import Pallete from "components/Pallete";
import Button from "components/Button/Button";
import GlobalStyle from "styles/globals";
import Styles from "components/Button/styles.js";

render(
  <>
    <GlobalStyle />
    <div>
      <Pallete />
      <Button icon="home" />
      <Styles>Comida</Styles>
    </div>
  </>,
  document.getElementById("app-root")
);
