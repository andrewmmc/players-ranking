import playerReducer, { updatePlayer } from "./index";
import { UPDATE_PLAYER } from "./types";

describe("action creators", () => {
  it("should create action", () => {
    const expected = {
      type: UPDATE_PLAYER,
      playerId: "IYhffw8XwJ",
      name: "Andrew Mok",
      score: 80,
    };
    expect(updatePlayer("IYhffw8XwJ", "Andrew Mok", 80)).toMatchObject(
      expected
    );
  });
});

describe("reducers", () => {
  it("should create Jenny's record when recieved UPDATE_PLAYER", () => {
    const oldState = {};
    const expectedState = {
      ec82ae68: { name: "Jenny", score: 20 },
    };
    const action = {
      type: UPDATE_PLAYER,
      playerId: "ec82ae68",
      name: "Jenny",
      score: 20,
    };
    expect(playerReducer(oldState, action)).toMatchObject(expectedState);
  });

  it("should update Jenny's record when recieved UPDATE_PLAYER", () => {
    const oldState = {
      ec82ae68: { name: "Jenny", score: 50 },
    };
    const expectedState = {
      ec82ae68: { name: "Jenny", score: 80 },
    };
    const action = {
      type: UPDATE_PLAYER,
      playerId: "ec82ae68",
      name: "Jenny",
      score: 80,
    };
    expect(playerReducer(oldState, action)).toMatchObject(expectedState);
  });
});
