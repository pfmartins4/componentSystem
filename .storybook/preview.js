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

addDecorator(s => <div style={{display: "flex", minHeight: "2rem"}}><GlobalStyle />{s()}</div>);

/* configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module); */