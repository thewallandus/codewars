/*

Write a function that checks if a given string (case insensitive) is a palindrome.

*/

// isPalindrome("Abba"), true)

function isPalindrome(x) {
    // turn string into lowercase
    // split then reverse it and see if it's equal to the orinal string in lower case
    // if yes => then true
    // if no => then false
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('') ? true : false
      }