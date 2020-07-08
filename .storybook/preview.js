import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks"
import GlobalStyle from "/styles/globals";
import React from "react"

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

addDecorator(s => <div style={{paddingLeft: "10px", paddingTop: "30px"}}><GlobalStyle />{s()}</div>);

configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module);