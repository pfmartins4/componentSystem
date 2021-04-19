//import GlobalStyle from "../src/styles/globals";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

//<GlobalStyle />
export const decorators = [
  Story => (
    <>
      <Story />
    </>
  ),
];
