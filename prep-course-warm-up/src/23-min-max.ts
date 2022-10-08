export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

/* first sulution, big and clunky
 
  const min = (array: number[]) => {
    let min = array[0];
    array.forEach((element) => {
      min = min < element ? min : element;
    });
    return min;
  };

  const max = (array: number[]) => {
    let max = array[0];
    array.forEach((element) => {
      max = max > element ? max : element;
    });
    return max;
  };

 */

const min = (array: number[]) => {
  return array.reduce((a, b) => (a < b ? a : b));
};

const max = (array: number[]) => {
  return array.reduce((a, b) => (a > b ? a : b));
};

/*Smalles footprint but not to the specs

  const min = (array: number[]) => {
    return Math.min.apply(null, array);
  };

  const max = (array: number[]) => {
    return Math.max.apply(null, array);
  };

*/

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
