/*

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/

function largestPairSum(numbers) {
    numbers.sort((a,b) => b - a)
    return numbers[0] + numbers[1]
}

// function largestPairSum (numbers) {
//     const arr = []
//     const firstNum = Math.max(...numbers)
//     const indexFirstNum = numbers.indexOf(firstNum)
//     numbers.splice(indexFirstNum, 1)
//   	const secondNum = Math.max(...numbers)
//     const indexSecondNum = numbers.indexOf(secondNum)
//     arr.push(firstNum, secondNum)
//   	return arr.reduce((acc, sum) => acc + sum)
// }