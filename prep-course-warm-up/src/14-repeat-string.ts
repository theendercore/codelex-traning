export {};

const repeatString = (leter: string, times: number) => {
  return leter.repeat(times);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
