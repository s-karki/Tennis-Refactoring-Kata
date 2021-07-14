import { expect } from "chai";
import * as TennisGame from "../src/TennisGame";
import * as _ from "lodash";
import { expectedScores } from "./testData";

const checkScore = (game) => {
  const scores = TennisGame.getScore(game);
  const correctScore = expectedScores.filter((key) => {
    return _.isEqual(key.scores, game.scores);
  });

  console.log(scores, game.scores);
  expect(scores).to.be.equals(correctScore[0].expected);
};

describe("TennisGame", () => {
  it("should start the game", () => {
    const game = TennisGame.beginTennisGame("Alice", "Bob");
    const scores = TennisGame.getScore(game);
    expect(game.players).to.contain("Alice");
    expect(game.players).to.contain("Bob");
  });
  it("should calculate correct scores when Alice earns points", () => {
    let game = TennisGame.beginTennisGame("Alice", "Bob");

    game = TennisGame.winPoint(game, "Alice");
    checkScore(game);

    game = TennisGame.winPoint(game, "Alice");
    checkScore(game);

    game = TennisGame.winPoint(game, "Alice");
    checkScore(game);

    game = TennisGame.winPoint(game, "Alice");
    checkScore(game);
  });

  it("should calculate correct scores when Bob earns points", () => {
    let game = TennisGame.beginTennisGame("Alice", "Bob");
    checkScore(game);

    game = TennisGame.beginTennisGame("Alice", "Bob");

    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);

    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);

    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);

    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);
  });

  it("should correct scores when both players earn points", () => {
    // ties
    let game = TennisGame.beginTennisGame("Alice", "Bob");
    game = TennisGame.winPoint(game, "Alice");
    game = TennisGame.winPoint(game, "Bob");

    checkScore(game);

    game = TennisGame.winPoint(game, "Alice");
    game = TennisGame.winPoint(game, "Bob");

    checkScore(game);

    game = TennisGame.winPoint(game, "Alice");
    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);

    // advantage
    game = TennisGame.winPoint(game, "Bob");
    checkScore(game);
  });
});
