export const UPDATE_PLAYER = "UPDATE_PLAYER";

export interface Player {
  name: string;
  score: number;
}

export interface PlayersState {
  [playerId: string]: Player;
}

export interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  playerId: string;
  name: string;
  score: number;
}

export type ActionTypes = UpdatePlayerAction;
