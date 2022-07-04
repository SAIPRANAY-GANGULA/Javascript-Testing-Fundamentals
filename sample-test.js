function add(a, b) {
    return a + b;
}

const subtract = (a, b) => a - b;

let result = add(5, 5);
let expected = 10;

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}

result = subtract(5, 4);
expected = 1;

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}
