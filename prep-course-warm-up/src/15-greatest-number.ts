export {};

// function greatest(x: number, y: number) {
//   return x > y ? x : y;
// }

function greatest(...args: number[]) {
  return Math.max(...args);
}
console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatest(3, 6, 788, 1, 5, 8));
