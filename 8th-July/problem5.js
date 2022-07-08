/*

ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

Note that spaces should be ignored in this case.

Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y

*/

// P: is a string
// R: is an uppercase string with spaces in between
// E: examples: "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// P: pseudo-code



function vaporcode(string) {
    // create a new variable that turns the string into uppercase and removes the space in between by using an array loop
    // loop through the string
    // for every character add + " " + " "
  	// then remove the last 2 spaces and return it
  	let newString = string.split(" ").join("").toUpperCase()
    let finalString = ""
    for (let i = 0; i < newString.length; i++) {
      finalString += newString[i] + " " + " "
    }
  	return finalString.slice(0, -2)
}

vaporcode("Lets go to the movies")
