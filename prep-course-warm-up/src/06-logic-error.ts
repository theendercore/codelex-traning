export {};

function trimWord(word: String) {
  return word.trim();
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
