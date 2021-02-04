import playerReducer, {
  initPlayers,
  updatePlayer,
  getTopTenPlayers,
} from "./index";
import { INIT_PLAYERS, UPDATE_PLAYER } from "./types";

describe("action creators", () => {
  it("should create action INIT_PLAYERS", () => {
    const mockPlayers = {
      "3c82ae68": { name: "Mary", score: 20 },
      "14f37bef": { name: "Peter", score: 48 },
      "961a63c1": { name: "Tom", score: 30 },
    };
    const expected = {
      type: INIT_PLAYERS,
      data: mockPlayers,
    };

    expect(initPlayers(mockPlayers)).toStrictEqual(expected);
  });

  it("should create action UPDATE_PLAYER", () => {
    const expected = {
      type: UPDATE_PLAYER,
      playerId: "IYhffw8XwJ",
      name: "Andrew",
      score: 80,
    };

    expect(updatePlayer("IYhffw8XwJ", "Andrew", 80)).toStrictEqual(expected);
  });
});

describe("selectors", () => {
  it("should sort and return top ten players", () => {
    const state = {
      players: {
        "2792502135f2": { name: "Mary", score: 20 },
        "39a6540a33ec": { name: "Peter", score: 48 },
        "9272bef8712c": { name: "Tom", score: 30 },
        "750c50735787": { name: "Jason", score: 23 },
        "79672c4aa304": { name: "Alex", score: 40 },
        "9dabd906b409": { name: "Teddy", score: 44 },
        "0b15ac1d878f": { name: "Andrew", score: 90 },
        "0a3545c36f41": { name: "Ken", score: 87 },
        "15961ba287ab": { name: "Danny", score: 47 },
        "936789b08407": { name: "Jenny", score: 29 },
        "14f37befdwse": { name: "Edward", score: 55 },
      },
    };
    const expected = [
      ["0b15ac1d878f", { name: "Andrew", score: 90 }],
      ["0a3545c36f41", { name: "Ken", score: 87 }],
      ["14f37befdwse", { name: "Edward", score: 55 }],
      ["39a6540a33ec", { name: "Peter", score: 48 }],
      ["15961ba287ab", { name: "Danny", score: 47 }],
      ["9dabd906b409", { name: "Teddy", score: 44 }],
      ["79672c4aa304", { name: "Alex", score: 40 }],
      ["9272bef8712c", { name: "Tom", score: 30 }],
      ["936789b08407", { name: "Jenny", score: 29 }],
      ["750c50735787", { name: "Jason", score: 23 }],
    ];

    const result = getTopTenPlayers(state);
    expect(result).toStrictEqual(expected);
    expect(result.length).toBe(10);
  });
});

describe("reducers", () => {
  it("should init players when recieved INIT_PLAYERS", () => {
    const mockPlayers = {
      "3c82ae68": { name: "Mary", score: 20 },
      "14f37bef": { name: "Peter", score: 48 },
      "961a63c1": { name: "Tom", score: 30 },
    };

    const expectedState = {
      ...mockPlayers,
    };
    const action = {
      type: INIT_PLAYERS,
      data: mockPlayers,
    };

    expect(playerReducer(undefined, action)).toStrictEqual(expectedState);
  });

  it("should create Jenny's record when recieved UPDATE_PLAYER", () => {
    const oldState = {};
    const expectedState = {
      "5c82ae68": { name: "Jenny", score: 20 },
    };
    const action = {
      type: UPDATE_PLAYER,
      playerId: "5c82ae68",
      name: "Jenny",
      score: 20,
    };

    expect(playerReducer(oldState, action)).toStrictEqual(expectedState);
  });

  it("should update Jenny's record when recieved UPDATE_PLAYER", () => {
    const oldState = {
      "7Yhffw8XwJ": { name: "Andrew", score: 30 },
      "5c82ae68": { name: "Jenny", score: 50 },
    };
    const expectedState = {
      "7Yhffw8XwJ": { name: "Andrew", score: 30 },
      "5c82ae68": { name: "Jenny", score: 80 },
    };
    const action = {
      type: UPDATE_PLAYER,
      playerId: "5c82ae68",
      name: "Jenny",
      score: 80,
    };

    expect(playerReducer(oldState, action)).toStrictEqual(expectedState);
  });

  it("should ignore other actions", () => {
    const state = {
      "7Yhffw8XwJ": { name: "Andrew", score: 30 },
      "5c82ae68": { name: "Jenny", score: 50 },
    };

    const action = {
      type: "OTHER_ACTION",
      otherId: "4e239q48",
    };

    expect(playerReducer(state, action)).toStrictEqual(state);
  });
});
