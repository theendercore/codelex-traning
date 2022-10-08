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

interface exchangeValue {
  amount: number;
  from: string;
  to: string;
}
// You are allowed to change only this function
function exchangeCurrency(ev: exchangeValue): number {
  //Here you would ask a web api to get the exchange rates
  // return ev.amount * api.latest().getRates([ev.from, ev.to])
  return ev.amount * 1.4;
}

//This should be in an exteranl lib by now
function formatCurrency(num: number) {
  return num.toFixed(2);
}
const product: string = "You don't know JS";
const price: number = 12.5;
const priceInUSD: number = exchangeCurrency({
  amount: price,
  from: "GBP",
  to: "USD",
});
const priceInBRL: number = exchangeCurrency({
  amount: price,
  from: "GBP",
  to: "BRL",
});

console.log("Product: " + product);
console.log("Price: $" + formatCurrency(priceInUSD));
console.log("Price: R$" + formatCurrency(priceInBRL));

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
