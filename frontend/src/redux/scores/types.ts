export const UPDATE_PLAYER_SCORE = "UPDATE_PLAYER_SCORE";

export interface ScoresState {
  [playerId: string]: number;
}

export interface UpdateScoreAction {
  type: typeof UPDATE_PLAYER_SCORE;
  playerId: string;
  score: number;
}

export type ActionTypes = UpdateScoreAction;
