/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

// P: either an empty string or a string || string
// R: returning an object || and empty object
// E: count("aba"), { a: 2, b: 1 }
// P: 

function count (string) {  
    const count = {}
    string.split('').forEach((character) => {
      count[character] = count[character] ? (count[character] + 1) : 1
    })
    return count
  }