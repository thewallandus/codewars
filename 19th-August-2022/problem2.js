/*

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

// P => string
// R => string with the firstname swapped for last name
// E => "john McClane" --> "McClane john"
// pseudo-code

function nameShuffler(str){
    // turn string into array
    // split it from the space in between
    // reverse it
    // join it
  	return str.split(" ").reverse().join(" ")
}