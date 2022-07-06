/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

//P: parameters: string with a bunch of numbers
//R: a string with 2 numbers and 1 space in between
//E:highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//P: pseudo-code

function highAndLow(numbers){
    //need to convert numbers into array
    //create a variable for minimum number
    //create a variable for maximum number
    //create a variable with an empty string
    // add the min var and max var with a template literal
    // return the new string
  	let arr = numbers.split(" ")
  	let min = Math.min(...arr)
    let max = Math.max(...arr)
  	let newString = `${max} ${min}`
    return newString
}