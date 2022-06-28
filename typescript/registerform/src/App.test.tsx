import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("renders Components", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
