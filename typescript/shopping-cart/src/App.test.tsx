import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

import App from "./App";

describe("<App/>", () => {
  it("Before login status", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const user = screen.getByText("login");
    expect(user).toBeInTheDocument();
  });

  it("After login status", () => {
    // TODO: User가 있을시 Ui가 변경되도록 수정
    const mockFn = jest.fn();
    // user.mockReturnValue("Crong");
    mockFn.mockImplementation((user) => `${user}`);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    console.log(mockFn("Crong"));
  });
});
