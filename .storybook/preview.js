import { addDecorator } from '@storybook/react';
import GlobalStyle from "/styles/globals";
import React from "react"

addDecorator(s => <div style={{paddingLeft: "10px", paddingTop: "30px"}}><GlobalStyle />{s()}</div>);
