/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  while (n) {
    result = result * n;
    n--;
  }
  return result;
}
