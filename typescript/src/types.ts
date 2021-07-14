export interface Player {
  name: string;
}

export type Score =
  | "Love"
  | "Fifteen"
  | "Thirty"
  | "Forty"
  | "Deuce"
  | "Advantage"
  | "Win"
  | "N/A";

export interface TennisGame {
  players: string[];
  scores: { [player: string]: Score };
}
