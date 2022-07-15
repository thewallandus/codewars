/*

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

//P: parameters: an array
//R: return a sum [integer] except highest and lowest number
//E: { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
//P: pseudo-code


function sumArray(array) {
    // conditional to check for 0 return
    // these conditions will be null, none, nothing, or empty array, or list with just one element
    // if these conditions aren't met, then proceed with the function
    // find the minimum element with Math.min
    // find the maximum elmenet with Math.max
    // remove both elmenets from the array to create a new array
    // run reduce function on the array and save it a sum variable
    // return sum variable
}