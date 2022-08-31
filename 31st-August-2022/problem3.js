/*

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false


*/

function isPalindrome(line) {
    // if number then turn it into string first
    // turn string into lowercase
    // split then reverse it and see if it's equal to the orinal string in lower case
    // if yes => then true
    // if no => then false
    const lineNew = `${line}`
    return lineNew.toString().toLowerCase() === lineNew.toLowerCase().split('').reverse().join('') ? true : false
}