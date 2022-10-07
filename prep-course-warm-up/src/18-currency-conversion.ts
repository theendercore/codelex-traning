export {};

/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
function convertToUSD(price: number): string {
  return (price * 1.4).toFixed(2);
}

const product: string = "You don't know JS";
const price: number = 19.99;
const priceInUSD: string = convertToUSD(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/
