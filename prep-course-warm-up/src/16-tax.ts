export {};

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax(price: number): number {
  return price * 0.21;
}
function formatCurrency(num: number) {
  return num.toFixed(2);
}

const product: string = "You don't know JS";
const price: number = 19.99;
const salesTax: number = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + formatCurrency(salesTax));
console.log("Total: £" + formatCurrency(price + salesTax));

/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
