/*

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

// P: parameters: an array that will never be empty
// R: returns: return the average rounded to its nearest integer
// E: examples: [2,2,2,2]), 2, [1,2,3,4,5,]),3
// P: pseudocode

function getAverage(marks){
    // sum out all of the elements of the array
    let sum = marks.reduce((acc, elements) => {
        return acc + elements
    }, 0)
    // Divide it by the total length
    return Math.floor(sum / marks.length)
}