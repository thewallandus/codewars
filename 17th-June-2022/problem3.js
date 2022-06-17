/*

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/

// Take in an array of integers.
// Create a new array.
// First element in the array will be the count of positive numbers IE HOW MANY TIMES THERE IS A POSITIVE NUMBER.
// SECOND ELEMENT: will be the sum of the negatives numbers.
// Push the count of positive numbers to the new array.
// Push the sum of the negatives to the new array.
// EDGE CASES: 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// CHECK IF NULL OR UNDEFINED?
// No? THEN CHECK IF IT'S AN EMPTY ARRAY?
// No? Then run the program!


function countPositivesSumNegatives(input) {
    let newArr = [];
    let count = 0;
    let negativesSum = 0;
  	if (input === null || input === undefined) {
      return newArr
    } else {		
    if (input.length === 0) {
        return input;
    } else if (input.length >= 1) {
        input.forEach((element) => {
            if (Math.sign(element) === 1) {
                count = count + 1
            } else if (Math.sign(element) === -1) {
                negativesSum += Math.abs(element)
            } else if (Math.sign(element) === 0 || Math.sign(element) === -0) {
                count += 0
                negativesSum += 0
            }
        })
}     
    }
  
    newArr.push(count)
    if (negativesSum === -0) {
      newArr.push(negativesSum)
    } else {
      newArr.push(-negativesSum)      
    }
    return newArr
}