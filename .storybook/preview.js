import GlobalStyle from "../src/styles/globals";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  Story => 
    <>
    <GlobalStyle />
    <Story/>
    </>
  
]