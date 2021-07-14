import * as _ from "lodash";
import { Score, TennisGame } from "./types";

export const beginTennisGame = (
  player1Name: string,
  player2Name: string
): TennisGame => {
  const players = [player1Name, player2Name];
  const scores: Record<string, Score> = {
    [player1Name]: "Love",
    [player2Name]: "Love",
  };

  return {
    players,
    scores,
  };
};

// naming??
const playerIsInGame = (game: TennisGame, playerName: String) => {
  const hasPlayer =
    game.players.filter((gamePlayer) => gamePlayer === playerName).length > 0;

  return hasPlayer;
};

const incrementFortyScore = (game: TennisGame, playerName: string): Score => {
  const allScores = Object.values(game.scores);
  // handle case where we are already in advantage
  return _.isEqual(allScores, ["Forty", "Forty"]) ? "Advantage" : "Win";
};

export const winPoint = (game: TennisGame, playerName: string): TennisGame => {
  if (!playerIsInGame(game, playerName)) {
    throw Error(`Player ${playerName} is not in this game`);
  }

  const playerScore = game.scores[playerName];
  let newPlayerScore: Score;

  switch (playerScore) {
    case "Love":
      newPlayerScore = "Fifteen";
      break;
    case "Fifteen":
      newPlayerScore = "Thirty";
      break;
    case "Thirty":
      newPlayerScore = "Forty";
      break;
    case "Forty":
      newPlayerScore = incrementFortyScore(game, playerName);
      break;
    case "Advantage":
      newPlayerScore = "Win";
    default:
      newPlayerScore = "N/A";
      break;
  }

  const newScores = {
    ...game.scores,
    [playerName]: newPlayerScore,
  };

  return {
    players: game.players,
    scores: newScores,
  };
};

export const getScore = (game: TennisGame): string => {
  const allScores = Object.values(game.scores);
  const player1Score = allScores[0];
  const player2Score = allScores[1];
  const isTied = allScores[0] === allScores[1];

  if (allScores.includes("Win")) {
    return "Game Over";
  }

  if (isTied) {
    return player1Score === "Forty" ? "Deuce" : `${player1Score}-All`;
  }

  for (let i = 0; i < game.players.length; i++) {
    const player = game.players[i];
    if (game.scores[player] === "Advantage") {
      return `Advantage ${player}`;
    }
  }

  return `${allScores[0]}-${allScores[1]}`;
};
