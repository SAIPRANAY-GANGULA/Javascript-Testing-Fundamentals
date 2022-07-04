const { add, subtract } = require("./math");

let result = add(5, 5);
let expected = 10;

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

result = subtract(5, 4);
expected = 1;

// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    equals(expected) {},
    graterThan(expected) {},
  };
}
