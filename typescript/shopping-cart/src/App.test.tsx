import { render } from "@testing-library/react";

import App from "./App";

describe("<App/>", () => {
  it("renders App Component", () => {
    const user = "Jemi";
    const { getByText } = render(<App />);

    expect(getByText(user)).toBeInTheDocument();
  });
});
