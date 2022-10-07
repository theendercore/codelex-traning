/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
  if (n <= 0) {
    return;
  }
  for (let i = 1; i <= n; i++) {
    let str = n - i ? " ".repeat(n - i) : "";
    let str2 = "#".repeat(i * 2 - 1);
    console.log(str + str2 + str);
  }
}
export { pyramid };
