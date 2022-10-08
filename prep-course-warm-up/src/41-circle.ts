export {};
/* test*/
/*
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */
/* Class implementation (A more ts aproritate sultuion then constructer functions)

  class Circle {
    constructor(public radius: number) {
      this.radius = radius;
    }
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() {
      return Math.PI * this.radius * 2;
    }
  }

*/

interface ICircle {
  radius: number;
  area: Function;
  perimeter: Function;
}
interface ICircleConstructor {
  new (radius: number): ICircle;
}

function Circle(this: ICircle, radius: number) {
  this.radius = radius;
  this.area = function (): number {
    return Math.PI * Math.pow(this.radius, 2);
  };
  this.perimeter = function (): number {
    return Math.PI * this.radius * 2;
  };
}

const c = new (Circle as any as ICircleConstructor)(3);
// console.log(c);
console.log("Area =", c.area().toFixed(2)); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter().toFixed(2)); // Expected output: Perimeter = 18.85

/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 */
