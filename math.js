function add(a, b) {
  return a + b;
}

const subtract = (a, b) => a - b;

const addAsync = (...args) => Promise.resolve(add(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { subtract, add, subtractAsync, addAsync };
