export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// const min = (array: any) => {
//   let min = array[0];
//   array.forEach((element: any) => {
//     min = min < element ? min : element;
//   });
//   return min;
// };
const min = (array: any) => {
  return Math.min.apply(null, array);
};

// const max = (array: any) => {
//   let max = array[0];
//   array.forEach((element: any) => {
//     max = max > element ? max : element;
//   });
//   return max;
// };
const max = (array: any) => {
  return Math.max.apply(null, array);
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
