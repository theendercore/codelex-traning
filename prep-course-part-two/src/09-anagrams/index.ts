/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */
function sortString(str: string) {
  return str
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, "")
    .split("")
    .sort()
    .reduce((a, b) => a + b);
}

function anagrams(stringA: string, stringB: string) {
  return sortString(stringA) === sortString(stringB);
}

export { anagrams };
