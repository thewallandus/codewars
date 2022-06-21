/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

// PSEUDOCODE
// Take in a list of numbers: clearly an array.
// Average formula = sum the total numbers / total number of numbers [or array.length]
// Run a loop through the array: and sum all the nums and store it in a variable // reduce method?
// Edge cases: empty arrays should return 0 ie array.length is 0.
//Make sure every element is a number: Use Number() method.



function find_average(array) {
    if (array.length === 0 ) {
      return 0
    } else {
         let sum = array.reduce((acc, element) => {
        return acc + element;
      }, 0)
      let average = sum / array.length
      return average
      } 
  }