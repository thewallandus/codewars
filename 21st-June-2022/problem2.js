/*

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

// PSEUDOCODE: Build a function.
// Builds out an array of integers.
// Create an empty array.
// Create a loop: for that reverses.
// That has an array of integers from n to 1 where n > 0.


const reverseSeq = n => {
    let arr = [];
    for (let i = n; i >= 1; i--) {
       arr.push(i)
    }
  	return arr
  };