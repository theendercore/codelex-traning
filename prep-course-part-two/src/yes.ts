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
let checkWords =
  "I am not gonna live forever, but I wanna live while I am alive"
    .toLowerCase()
    .replaceAll(/[^a-z0-9\s ]/gi, "");

const newStr = checkWords.split(" ").reduce((acc: any, rec: any) => {
  return { ...acc, [rec]: (acc[rec] || 0) + 1 };
}, {});

console.log(typeof newStr);
