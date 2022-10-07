/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  return input
    .replace("-", " ")
    .split(" ")
    .map((world) => world.replace(/[^0-9a-z]/gi, "").slice(0, 1))
    .reduce((a, b) => a + b)
    .toUpperCase();
}
export { parse };