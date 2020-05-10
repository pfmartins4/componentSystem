import React from 'react';
import { render } from 'react-dom';
import Pallete from "/components/Pallete";
import Button from "/components/Button";
import GlobalStyle from "/styles/globals";

render(
    <>
        <GlobalStyle />
        <div>
            <Pallete />
            <Button icon="home" />
        </div>
    </>,
    document.getElementById('app-root')
);