/*

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

// Given an array a
// Given a value x which can be numbers or strings
// Check the array with a loop
// If it has the value: return true [conditional]
// Else return false [by default]

function check(a,x){
    let result = false;
    for(i = 0; i < a.length; i++){
      if(a[i]==x){
      result  = true;
      }
     
    }
    return result;
  };