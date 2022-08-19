/*

Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

A pythagorean triple is formed when:

c2 = a2 + b2
where c is the largest value of a, b, c.

For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

Return Values
1 if a, b and c form a pythagorean triple
0 if a, b and c do not form a pythagorean triple
For Python: return True or False
For JavaScript: return true or false

*/

// P => an array of integers
// R => return true or false
// E => For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
// P

function isPythagoreanTriple(integers) {
    // sort it from lowest to highest
    // find the max integer in the array
    // square of the max integer => sum of the square of the other two 
    // then return true
    // or else return false
    const ascend = integers.sort((a, b) => return a-b);
    return (ascend[2] ** 2) === ((ascend[0] ** 2) + (ascend[1] ** 2)) ? true : false
  }