/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/

// P => string
// R => an array of two strings
// E => capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

// create two empty strings
// in the first, push for loop that makes upper case for even
// in the second, push for loop that makes upper case for odd

function capitalize(s){
    let str1 = ''
    let str2 = ''
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
          str1 += s[i].toUpperCase() 
        } else {
          str1 += s[i]
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (j % 2 === 1) {
          str2 += s[j].toUpperCase() 
        } else {
          str2 += s[j]
        }
    }
    return [str1, str2]
};