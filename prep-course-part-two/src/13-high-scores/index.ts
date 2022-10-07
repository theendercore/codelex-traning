/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  private sortedScores: number[];
  constructor(scores: number[]) {
    this.scores = [...scores];
    this.sortedScores = scores.sort((a, b) => b - a);
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return this.sortedScores[0];
  }

  get personalTopThree() {
    return this.scores.length > 3
      ? this.sortedScores.slice(0, 3)
      : this.sortedScores;
  }
}

export { HighScores };
