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

function vowels(s: string) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let num: number = 0;
  s.split("").forEach((letter) =>
    VOWELS.forEach((vowel) => {
      if (letter.toLocaleLowerCase() === vowel) {
        num++;
      }
    })
  );
  return num;
}

export { vowels };
