/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
  return parseInt(
    (int < 0 ? "-" : "") +
      int
        .toString()
        .split("")
        .reduceRight((a, b) => a + b)
  );
}

export { reverse };
