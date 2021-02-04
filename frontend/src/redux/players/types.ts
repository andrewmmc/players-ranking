export const INIT_PLAYERS = "INIT_PLAYERS";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export interface Player {
  name: string;
  score: number;
}

export interface PlayersState {
  [playerId: string]: Player;
}

export interface InitPlayersAction {
  type: typeof INIT_PLAYERS;
  data: PlayersState;
}

export interface UpdatePlayerAction {
  type: typeof UPDATE_PLAYER;
  playerId: string;
  name: string;
  score: number;
}

export type ActionTypes = InitPlayersAction | UpdatePlayerAction;
