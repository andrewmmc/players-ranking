import React from "react";
import { useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import Leaderboard from "../Leaderboard";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../utils/webSocketService", () => ({
  onReceive: jest.fn(),
}));

describe("Leaderboard", () => {
  it("should render placeholder text when no players in the list", () => {
    useSelector.mockReturnValueOnce(undefined);

    render(<Leaderboard />);
    const placeholderText = screen.getByText("No players available.");
    expect(placeholderText).toBeInTheDocument();
  });

  it("should render players list in 11 rows (header + contents)", () => {
    const mockPlayers = [
      ["86d8d829", { name: "Andrew", score: 90 }],
      ["376f01b2", { name: "Ken", score: 87 }],
      ["14f37bef", { name: "Peter", score: 48 }],
      ["9cbe7899", { name: "Danny", score: 47 }],
      ["049d5872", { name: "Teddy", score: 44 }],
      ["54de9f00", { name: "Alex", score: 40 }],
      ["961a63c1", { name: "Tom", score: 30 }],
      ["d9538a03", { name: "Jenny", score: 29 }],
      ["46b111c2", { name: "Jason", score: 23 }],
      ["ec82ae68", { name: "Mary", score: 20 }],
    ];
    useSelector.mockReturnValueOnce(mockPlayers);

    render(<Leaderboard />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(11);
  });
});
