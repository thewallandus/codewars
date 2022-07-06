/*

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

*/

// P: parameters: it's a string that can be odd or even characters
// R: returns: a string that is 1 or 2 characters depending on conditional
// E: Kata.getMiddle("test") should return "es"
// P: pseudo-code


function getMiddle(s) {
	// create a conditional
  // if s.length % 2 === 0 => return the middle two characters
  //if s.length % 2 != 0 => return the middle character 
  // how do you calculate the middle two characters => 4 || 0, 1, 2, 3 
  //"testing" || 0, 1, 2, 3, 4, 5, 6 => s.length - 1 / 2
  //"middle" || 0, 1, 2, 3, 4, 5 => s.length - 1 / 2 
  // create a variable for s.length - 1 / 2
  // Math.floor it for the lower number
  // Math.ceil it for the upper number
  // For the odd one it should still work
  let mid = (s.length - 1) / 2;
  console.log(mid)
  let ret = "";
  if (s.length % 2 === 0) {
    ret += s[Math.floor(mid)] + s[Math.ceil(mid)]
    console.log(ret)
  } else if (s.length % 2 != 0) {
    ret += s[mid]
  }
  return ret;
}
