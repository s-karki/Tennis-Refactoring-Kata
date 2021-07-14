export const expectedScores = [
  {
    scores: { Alice: "Love", Bob: "Love" },
    expected: "Love-All",
  },
  {
    scores: { Alice: "Fifteen", Bob: "Love" },
    expected: "Fifteen-Love",
  },
  {
    scores: { Alice: "Thirty", Bob: "Love" },
    expected: "Thirty-Love",
  },
  {
    scores: { Alice: "Forty", Bob: "Love" },
    expected: "Forty-Love",
  },
  {
    scores: { Alice: "Win", Bob: "Love" },
    expected: "Game Over",
  },
  {
    scores: { Alice: "Love", Bob: "Fifteen" },
    expected: "Love-Fifteen",
  },
  {
    scores: { Alice: "Love", Bob: "Thirty" },
    expected: "Love-Thirty",
  },
  {
    scores: { Alice: "Love", Bob: "Forty" },
    expected: "Love-Forty",
  },
  {
    scores: { Alice: "Love", Bob: "Win" },
    expected: "Game Over",
  },
  {
    scores: { Alice: "Fifteen", Bob: "Fifteen" },
    expected: "Fifteen-All",
  },
  {
    scores: { Alice: "Thirty", Bob: "Thirty" },
    expected: "Thirty-All",
  },
  {
    scores: { Alice: "Forty", Bob: "Forty" },
    expected: "Deuce",
  },
  {
    scores: { Alice: "Forty", Bob: "Advantage" },
    expected: "Advantage Bob",
  },
  {
    scores: { Alice: "Advantage", Bob: "Forty" },
    expected: "Advantage Alice",
  },
];
