export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(email: string) {
  return (
    `${email.slice(0, email.indexOf("@")).slice(0, -3)}` +
    `...${email.slice(email.indexOf("@"))}`
  );
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail("12345@example.com")); // Expected result: 12...@example.com
console.log(protectEmail("12@example.com")); // Expected result: ...@example.com
