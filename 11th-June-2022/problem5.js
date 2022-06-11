/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

// We need a new array || ideally array methods that produce A NEW ARRAY
// TWO CONDITIONS: one if it has an integer square root === take the integer square root
// If no integer square root === take the square number

function squareOrSquareRoot(array) {
    let newArray = array.map((element) => {
        if (Math.sqrt(element) % 1 === 0) {
            return Math.sqrt(element)
        } else {
            return element ** 2
        }
    })
    return newArray;
  }
