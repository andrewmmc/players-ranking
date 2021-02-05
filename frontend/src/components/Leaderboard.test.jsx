import React from "react";
import { useSelector } from "react-redux";
import { render, screen } from "@testing-library/react";
import Leaderboard, { handleSocketMessage } from "./Leaderboard";
import { INIT_PLAYERS, UPDATE_PLAYER } from "../redux/players/types";
import webSocketService from "../utils/webSocketService";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("../utils/webSocketService");

describe("render", () => {
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

describe("web socket", () => {
  const mockPlayers = {
    "14f37bef": { name: "Peter", score: 48 },
  };

  it("should call webSocketService.onReceive() to init EventListener", async () => {
    render(<Leaderboard />);
    expect(webSocketService.onReceive).toBeCalledTimes(1);
  });

  it("should dispatch players data for init", () => {
    const mockedDispatch = jest.fn();
    handleSocketMessage(mockedDispatch)({
      type: INIT_PLAYERS,
      data: mockPlayers,
    });
    expect(mockedDispatch).toBeCalledTimes(1);
  });

  it("should dispatch player data for update", () => {
    const mockedDispatch = jest.fn();
    handleSocketMessage(mockedDispatch)({
      type: UPDATE_PLAYER,
      playerId: "14f37bef",
      name: "Peter",
      score: 52,
    });
    expect(mockedDispatch).toBeCalledTimes(1);
  });

  it("should ignore other actions", () => {
    const mockedDispatch = jest.fn();
    handleSocketMessage(mockedDispatch)({
      type: "OTHER_ACTION",
    });
    expect(mockedDispatch).toBeCalledTimes(0);
  });
});
