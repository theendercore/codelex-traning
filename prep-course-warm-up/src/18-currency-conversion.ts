export {};
/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
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
const price: number = 19.99;
const priceInUSD: number = await exchangeCurrency({
  amount: price,
  from: "GBP",
  to: "USD",
});

console.log("Product: " + product);
console.log("Price: $" + formatCurrency(priceInUSD));

/* Expected output:

    > Product: You don't know JS
    > Price: $27.99

*/
