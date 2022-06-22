/*

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

*/

// Take an array.
// Test the array length and check with a conditional if there are numbers or not.
// Return sum of the numbers: maybe reduce?
// Edge cases: can assume only numbers? YES!
// Can't assume size of the array.
// If array length = 0, then return zero.

function sum(numbers) {
    if (numbers.length === 0) {
      return 0
    } else {
      const sum = numbers.reduce((acc, element) => {
        return acc + element
      }, 0)
      return sum
    }
};

sum([]);
sum([1, 5.2, 4, 0, -1]);