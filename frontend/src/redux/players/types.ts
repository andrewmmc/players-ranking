export const UPDATE_PLAYER = "UPDATE_PLAYER";

export interface PlayersState {
  [playerId: string]: string;
}

export interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  playerId: string;
  name: string;
}

export type ActionTypes = UpdatePlayerAction;
