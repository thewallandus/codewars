/*

The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!

*/

// P: two numbers => start and end integer value
// R: an array of numbers that fulfill the condition
// E: sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumDigPow(a, b) {
    function sumDigPow(a, b) {
        let result = [];
        
        for (let i = a; i <= b; i++) {
          let arr = i.toString().split('');
          let sum = 0;
          
          for (let j = 0; j <= arr.length; j++) {
            sum += Math.pow(arr[j], j + 1);
            
            if (sum === i) {
              result.push(i);
            }
          }
        }
        return result;
      }
      
}
  