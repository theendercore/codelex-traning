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
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);
    console.log(str + `#`.repeat(i * 2 - 1) + str);
  }
}
export { pyramid };
