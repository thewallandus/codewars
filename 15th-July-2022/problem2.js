/*

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

//P: parameters: 3 integer values a, b, c
//R: returns true or false if the sum of two side lengths of a triangle is always greater than the third side
//E: examples \\ isTriangle(1,2,2), true
//P: pseudo-code


function isTriangle(a,b,c) {
    if ((a + b) > c && (b + c) > a && (a + c) > b) {
      return true
    } else {
      return false
    }
   }
   
isTriangle(1, 2, 2)