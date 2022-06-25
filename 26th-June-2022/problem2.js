/*

Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" -> "battle no requires which that is victory greatest The"

*/

// P: parameters: only strings that could have any characters
// R: returns: reverses all the words in the string
// E: examples: "The greatest victory is that which requires no battle" -> "battle no requires which that is victory greatest The"
// P: pseudocode

function reverseWords(str){
    // convert string into array
    // break the array elements split by space
    // reverse it
    // join it 
    return str.split(" ").reverse().join(" ");
  }