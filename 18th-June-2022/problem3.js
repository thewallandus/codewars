/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

// Take in a string that will NEVER BE EMPTY.
// Create a new empty string.
// Run a loop so that we can loop through the string.
// Then as you're looping through the string...
// Run a conditional.
// First check of conditional: if digit < 5 
// If YES === Replace it with 0
// IF NO === Replace it with 1

function fakeBin(x){
    let newStr = "";
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) < 5) {
            newStr += "0"
        } else if (Number(x[i]) >= 5) {
            newStr += "1"
        }
    }
    return newStr;
}