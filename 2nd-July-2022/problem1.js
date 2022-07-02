/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

// P: parameters: take a number that is non-negative including zero
// R: returns: return its digits in descending order [as an integer]
// E: examples: 15 -> 51 || 1021
// P: pseudocode


function descendingOrder(n){
    //convert number to string
    // convert this string into an array with split
    // sort this array into ascending order
    // reverse it
    // join it and turn it into a string again
    // take just the number from this string
    return Number(String(n).split('').sort().reverse().join(''))
  }