/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

Hint: Don't forget to check for bad values like null/undefined

*/

// Can the value be null or undefined? What could return those values?
// Loop through the array.
// Have a variable that stores the number of true in the array.
// The variable updates as the number increases and the iterator passes through the array.
// Return the variable and the final number.


function countSheeps(arrayOfSheep) {
  
    let number = 0;
  
    for (let i = 0; i < arrayOfSheep.length; i++) 
        
        if (arrayOfSheep[i] === true) {
             number += 1;
      }
    
    return number;
  }
