/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

// Take an array of integers.
// Run a loop that loops through all the elements in the array.
// Double the value.

function maps(x){
    return x.map((element) => {
        return element * 2
    })
}