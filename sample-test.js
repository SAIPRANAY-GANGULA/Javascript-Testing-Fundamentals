const { add, subtract } = require("./math");

test("Addition of 2 numbers", () => {
  const result = add(5, 5);
  const expected = 0;
  expect(result).toBe(expected);
});

test("Subtraction of 2 numbers", () => {
  const result = subtract(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
});

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

function test(title, cb) {
  try {
    cb();
    console.log(`Success: ${title}`);
  } catch (e) {
    console.log(`Error: ${title}`);
    console.log(`${e}`);
  }
}
