/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

// P: long string with multiple characters
// R: return the length of the shortest word || ie a number
// E: findShort("bitcoin take over the world maybe who knows perhaps"), 3
// P: pseudo-code

function findShort(s){
    let array = s.split(" ")
    let smallestString = array.sort((a, b) => a.length - b.length)[0]
		let smallestNum = smallestString.length
    return smallestNum
}


