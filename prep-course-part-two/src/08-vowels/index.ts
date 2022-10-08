/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const VOWELS = ["a", "e", "i", "o", "u"];

function vowels(s: string) {
  return s
    .toLowerCase()
    .split("")
    .reduce((a, b) => {
      VOWELS.forEach((v) => (a += v === b ? b : ""));
      return a;
    }, "").length;
}

export { vowels };
