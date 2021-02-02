// constants
export const UPDATE_PLAYER_SCORE = "UPDATE_PLAYER_SCORE";

export interface PlayerScoreState {
  [name: string]: number;
}

export interface UpdateScoreAction {
  type: typeof UPDATE_PLAYER_SCORE;
  player: string;
  score: number;
}

export type ActionTypes = UpdateScoreAction;
