export {};

// function greatest(x: number, y: number) {
//   return x > y ? x : y;
// }
function greatest(...args: number[]) {
  let big: number = 0;
  for (let i = 0; i < args.length; i++) {
    big = args[i] > big ? args[i] : big;
  }
  return big;
}
console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatest(3, 6, 788, 1, 5, 8));
