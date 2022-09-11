/*

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

*/

function validateUsr(username) {
    let res = /^[a-z0-9_]{4,16}$/.test(username) 
    return res
    // starts with anything that is a-z letters
    // has numbers between 0-9
    // is between 4, 16 characters
    // .test gives true or false
    // return res returns the boolean value
  }