export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
  return firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord);
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"
