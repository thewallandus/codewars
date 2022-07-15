/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

*/

//P: an array with minimum 4 positive integers
//R: sum of the two lowest positive numbers
//E: [19, 5, 42, 2, 77], the output should be 7.
//P: pseudo-code


function sumTwoSmallestNumbers(numbers) {  
    //find the smallest number and push it out of the array using splice (once you have the index)
    // Also save it in a variable
    // find the smallest number in the new array
    // save it in a variable
    // return the sum of the two variables
  	const min1 = Math.min(...numbers)
    numbers.splice(numbers.indexOf(min1), 1)
  	const min2 = Math.min(...numbers)
  	return min1 + min2
}
