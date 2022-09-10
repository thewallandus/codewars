/*

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
    let sum = 0
    const num = `${Math.abs(number)}`
    for (let i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
  	return sum
}
