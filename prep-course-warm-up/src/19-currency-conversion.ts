export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
function convertToOtherCurrency(amount: number, rate: number): number {
  return amount * rate;
}
// You are allowed to change this function
function convertToBRL(price: number): string {
  let convertedPrice = convertToOtherCurrency(price, 3.4);
  return (convertedPrice - convertedPrice * 0.1).toFixed(2);
}

const product: string = "You don't know JS";
const price: number = 12.5;
const priceInUSD: string = convertToOtherCurrency(price, 1.4).toFixed(2);
const priceInBRL: string = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
