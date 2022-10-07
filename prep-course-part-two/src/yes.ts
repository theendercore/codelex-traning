// class HighScores {
//   scores: number[];
//   private sortedScores: number[];
//   constructor(scores: number[]) {
//     this.scores = scores;
//     this.sortedScores = scores.sort((a, b) => a - b);
//   }

class PhoneNumber {
  private phoneNumber: string;
  constructor(input: string) {
    this.phoneNumber = input.length > 11 ? "null" : input.replaceAll(/\s/g, "");
  }

  number() {
    return this.phoneNumber == "null" ? null : this.phoneNumber;
  }
}
//   get latest() {
//     return this.scores[this.scores.length - 1];
//   }

//   get personalBest() {
//     return this.sortedScores[0];
//   }

//   get personalTopThree() {
//     return this.sortedScores.slice(0, 3);
//     // return this.scores.length > 3
//     //   ? this.sortedScores.slice(0, 1)
//     //   : this.sortedScores;
//   }
// }

// const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
// console.log(new HighScores(input).personalTopThree);
// let pn: PhoneNumber = new PhoneNumber("00-00  - 00");
// console.log(pn.number());

function findShortest(s: string) {
  return s.split(" ").reduce((acc: any, curr: any) => {
    if (!acc || curr.length < acc[0].length) {
      return [curr];
    }
    if (curr.length === acc[0].length) {
      acc.push(curr);
    }
    return acc;
  });
}

console.log(findShortest("how are you doing this wonderfull coding man"));
