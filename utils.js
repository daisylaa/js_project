// utils.js

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to subtract one number from another
function subtract(a, b) {
  return a - b;
}

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Export the functions for testing
module.exports = {
  add,
  subtract,
  isEven,
};
