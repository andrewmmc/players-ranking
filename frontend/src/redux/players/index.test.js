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
      ["0b15ac1d878f", { name: "Andrew", score: 90, rank: 1 }],
      ["0a3545c36f41", { name: "Ken", score: 87, rank: 2 }],
      ["14f37befdwse", { name: "Edward", score: 55, rank: 3 }],
      ["39a6540a33ec", { name: "Peter", score: 48, rank: 4 }],
      ["15961ba287ab", { name: "Danny", score: 47, rank: 5 }],
      ["9dabd906b409", { name: "Teddy", score: 44, rank: 6 }],
      ["79672c4aa304", { name: "Alex", score: 40, rank: 7 }],
      ["9272bef8712c", { name: "Tom", score: 30, rank: 8 }],
      ["936789b08407", { name: "Jenny", score: 29, rank: 9 }],
      ["750c50735787", { name: "Jason", score: 23, rank: 10 }],
    ];

    const result = getTopTenPlayers(state);
    expect(result).toStrictEqual(expected);
    expect(result.length).toBe(10);
  });

  it("should keep same ranking if two players score are the same", () => {
    const state = {
      players: {
        "2792502135f2": { name: "Mary", score: 20 },
        "39a6540a33ec": { name: "Peter", score: 48 },
        "9272bef8712c": { name: "Tom", score: 30 },
        "750c50735787": { name: "Jason", score: 30 },
        "79672c4aa304": { name: "Alex", score: 40 },
        "9dabd906b409": { name: "Teddy", score: 87 },
        "0b15ac1d878f": { name: "Andrew", score: 90 },
        "0a3545c36f41": { name: "Ken", score: 87 },
        "15961ba287ab": { name: "Danny", score: 47 },
        "936789b08407": { name: "Jenny", score: 29 },
        "14f37befdwse": { name: "Edward", score: 55 },
      },
    };
    const expected = [
      ["0b15ac1d878f", { name: "Andrew", score: 90, rank: 1 }],
      ["9dabd906b409", { name: "Teddy", score: 87, rank: 2 }],
      ["0a3545c36f41", { name: "Ken", score: 87, rank: 2 }],
      ["14f37befdwse", { name: "Edward", score: 55, rank: 4 }],
      ["39a6540a33ec", { name: "Peter", score: 48, rank: 5 }],
      ["15961ba287ab", { name: "Danny", score: 47, rank: 6 }],
      ["79672c4aa304", { name: "Alex", score: 40, rank: 7 }],
      ["9272bef8712c", { name: "Tom", score: 30, rank: 8 }],
      ["750c50735787", { name: "Jason", score: 30, rank: 8 }],
      ["936789b08407", { name: "Jenny", score: 29, rank: 10 }],
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
