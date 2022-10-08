export {};

function s(w1: string, w2: string) {
  return w1.concat(" ").concat(w2);
}
/* infinet args way
 function s(...args: string[]) {
 return args.reduce((a, b) => `${a} ${b}`);
 }
*/
const result = s("hello", "world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
