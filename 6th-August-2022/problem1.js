/*

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

*/

// P => an empty or an array with strings
// R => a string
// // E: []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// P:


function likes(names) {
    // if empty array, then no one likes this
    // if array length === 1 => then `${array[0]} likes this`
    // if array length === 2 => then `${array[0]} and ${array[1]} like this`
    // if array length === 3 => then `${array[0]}, ${array[1]}, ${array[2]} like this`
    // if array length > 3 => then `${array[0]}, ${array[1]} and ${array.length - 2} others like this`
    
}