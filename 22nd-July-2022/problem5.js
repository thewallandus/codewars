/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// P: number
// R: if negative === zero || integer = sum of all the mutiples of 3 or 5 below the number passed in
// E: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// P:

function solution(number){  
    // whatever number we put in here
    // find all the number that are multiples of 3 or multiples of 5
    // and then sum it all
    // create a new sum that's 0
    // run a for loop that checks or pushes if the number is a multiple of 3 or 5
    // if both 3 and 5, then add 1 to sum
    var sum = 0;
    for (var i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    return sum;
  }