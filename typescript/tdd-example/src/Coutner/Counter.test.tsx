import { render } from "@testing-library/react";

import Counter from ".";

describe("<Counter/>", () => {
  it("renders Counter Component", () => {
    render(<Counter />);
  });
});
