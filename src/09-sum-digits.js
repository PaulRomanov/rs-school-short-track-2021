/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  const newN = `${n}`;
  let sum = newN.split('').reduce((x, y) => +x + +y);
  sum += '';

  for (let i = 1; i < sum.length; i++) {
    if (sum !== 1) {
      sum = `${sum}`;
      sum = sum.split('').reduce((x, y) => +x + +y);
    }
  }
  sum = +sum;
  return sum;
}
module.exports = getSumOfDigits;
