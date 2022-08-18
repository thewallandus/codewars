/*

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/

// P: two strings
// R: 1, 0, -1
// E: 'a' and 'g' returns 1
// P


function sameCase(a, b){
    // if either character not a letter then return -1
    // if both characters are the same case => return 1
    // if both characters are letters but not the same case => return 0
  	// turn character to uppercase and check if it matches with itself
  	// perform the same with the other character
  	// repeat same steps with lowercase
    const aTest = /[a-zA-Z]/.test(a)
    const bTest = /[a-zA-Z]/.test(b)
  	if (aTest && bTest) {
      if (a.toUpperCase() === a && b.toUpperCase() === b || a.toLowerCase() === a && b.toLowerCase() === b) {
        return 1
      } else {
        return 0
      }
    } else {
      return -1
    }
}