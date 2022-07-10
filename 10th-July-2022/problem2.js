/*

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org

*/

//P: parameters: string
//R: returns: string
// //E: examples: 
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//P: pseudo-code

// "How can mirrors be real if our eyes aren't real"
// "How Can Mirrors Be Real If Our Eyes Aren't Real"


function jadenCase(string) {
    // turn the string into an array
    // Loop through the array
    // convert the first character of every element into upper case and remove the first character of every string as it was initially
    // create a new array and turn it into a string
    // return it
    let array = string.split(" ")
    const newArray = array.map((element) => {
      return element = element[0].toUpperCase() + element.slice(1)
    })
    return newArray.join(" ")
  }
  
  jadenCase("How can mirrors be real if our eyes aren't real");
  
  