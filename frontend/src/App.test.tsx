import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("App", () => {
  it("should show Leaderboard", () => {
    render(<App />);
    const element = screen.getByText(/leaderboard/i);
    expect(element).toBeInTheDocument();
  });
})
