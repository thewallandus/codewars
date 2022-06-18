/*

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

*/

// Create a function.
// Takes an array.
// Finds the index of the array with the element "needle" (INDEXOF METHOD)?
// Save this index in a variable.
// Then returns "found the needle at position ${}" (use string interpolation to create a string with the variable that has the index.)


function findNeedle(haystack) {
	let indexOfNeedle = haystack.indexOf("needle");
    return `found the needle at position ${indexOfNeedle}`
}