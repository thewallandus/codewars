/*

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

*/

// P: group of string
// R: return a string
// E: buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String'

function buildString(...template){
    return `I like #{template.join(',')}!`;
  }