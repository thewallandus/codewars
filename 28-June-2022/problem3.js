/*

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

// P: a non-empty array of integers
// R: the result of multiplying the values together in order
// E: [1, 2, 3]), 6
// [4, 1, 1, 1, 4]), 16
// P: pseudo-code

function grow(x){
    // create a variable to store the value
    // Loop through the array elements and multiply [maybe reduce?]
    // return the result
    let sum = x.reduce((first, second) => {
      return first * second
    }, 1)
    return sum
}
