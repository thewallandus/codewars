/*

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

*/

// P: two strings that are numbers 
// R: return the sum of the 2 string nums
// E: "4",  "5" --> "9"
// "34", "5" --> "39"
// P

function sumStr(a,b) {
    // if a === '' consider it as zero and return the other number that's a string
    // if b === '' consider it as zero and return the other number that's a string
    // if both are '' then return zero
    // else do: Number(a) + Number(b)
    // and turn it all into string
    return a === '' && b === '' ? 0 
            : a === '' ? `Number(b)`
            : b === '' ? `Number(a)`
            : `${Number(a) + Number(b)}`
}