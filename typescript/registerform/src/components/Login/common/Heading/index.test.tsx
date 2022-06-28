import { render, screen } from "@testing-library/react";

import Heading from ".";

describe("Heading", () => {
  it("renders Components", () => {
    render(<Heading>Title</Heading>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
