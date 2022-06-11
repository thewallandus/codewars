/*

Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

*/

// Create a method.
// That does a string interpolation.
// But first, it turns the array into a string and then joins it with a space in between.

function sayHello(name, city, state) {
    let newName = name.join(" ")
    return `Hello, ${newName}! Welcome to ${city}, ${state}!`
  }
