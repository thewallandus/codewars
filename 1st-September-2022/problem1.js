/*

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/

// P => an array of numbers [integers]
// R => return an array with duplicates removed
// E => Test.assertSimilar(distinct([1,2]), [1,2]);
// Test.assertSimilar(distinct([1,1,2]), [1,2]);
// P => 

// SOLUTION 1:

// function distinct(a) {
//    // use set to return a list of items that are unique
//    // the keyword here being unique
//     return [...new Set(a)]
// }


// SOLUTION 2:

function distinct(a) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        if (!arr.includes(a[i])) {
            arr.push(a[i])
        }
    }
    return arr
    // create an empty array
    // start a for loop that loops through the a array
    // if it doesn't includes the item I'm looping through
    // push it to the empty array
    // return it
}