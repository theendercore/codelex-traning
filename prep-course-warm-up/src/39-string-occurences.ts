export {};

const count = (text: string, word: string) => {
  return text.split(" ").filter((a) => a.toLowerCase() === word).length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
