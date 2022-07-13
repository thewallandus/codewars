/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

// P: string with any number of characters
// R: a boolean that's true or false
// // E: XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// P: pseudo-code

function XO(str) {
    // convert string to lowercase
    // check total count of "o" in the string
    // check total count of "x" in the string
    // conditional to check if total count of both is the same
    // if no then return false
    // if yes then return true
      let strLowerCase = str.toLowerCase()
      let counto = (strLowerCase.match(/o/g) || []).length
      let countx = (strLowerCase.match(/x/g) || []).length
      if (counto === countx) {
        return true
      } else {
        return false
      }
}