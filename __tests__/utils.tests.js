// __tests__/utils.test.js

const { add, subtract, isEven } = require('../utils');

describe('Utility functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('checks if 4 is even', () => {
    expect(isEven(4)).toBe(true);
  });

  test('checks if 5 is not even', () => {
    expect(isEven(5)).toBe(false);
  });
});
