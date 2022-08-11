/*

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/

// P takes an integer that is n > 1
// R: an array with integers's divisors (except 1 and the number itself from smallest to largest)
// if number is prime => return (integer) is prime

function divisors(integer) {
    // if number divisible by itself and 1 => prime
    // create an array of the divisible numbers
    // by default they have 1 and the number itself as the start and end value
    // so start a for loop and push all the nums it is divisible by and set the start and end value as 1 and the integer
    // finally check with an if else statement if arr.length === 2 else sort it and remove the first and last value and return it
    let arr = [1, integer]
      for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        arr.push(i)
      }
    }
    if (arr.length === 2) {
         return `${integer} is prime` 
    } else {
       return arr.sort((a,b) => a - b).slice(1, -1)
    }
  };


