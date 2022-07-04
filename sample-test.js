const { add, subtract, subtractAsync, addAsync } = require("./math");

test("Addition of 2 numbers", () => {
  const result = add(5, 5);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtraction of 2 numbers", () => {
  const result = subtract(5, 5);
  const expected = 0;
  expect(result).toBe(expected);
});

test("Async Addition of 2 numbers", async () => {
  const result = await addAsync(5, 5);
  const expected = 0;
  expect(result).toBe(expected);
});

test("Async Subtraction of 2 numbers", async () => {
  const result = await subtractAsync(5, 5);
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

async function test(title, cb) {
  try {
    await cb();
    console.log(`Success: ${title}`);
  } catch (e) {
    console.log(`Error: ${title}`);
    console.log(`${e}`);
  }
}
