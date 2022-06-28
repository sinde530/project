import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "../src/App.css";

addDecorator((story) => (
  <RecoilRoot>
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  </RecoilRoot>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
