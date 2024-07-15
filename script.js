function fibonacci(num) {
  if (num === 0) return 0; // Base case: the 0th Fibonacci number is 0
  if (num === 1) return 0; // Adjusted base case: the 1st Fibonacci number is 0 (based on the given series definition)
  if (num === 2) return 1; // Base case: the 2nd Fibonacci number is 1

  let a = 0;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3

module.exports = fibonacci;
