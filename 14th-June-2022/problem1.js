/*

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

// Take in n as the input.
// need a loop that runs through as many times as n.
// Return two to the power of n as many times as the number n.
// From 0 to n.

function powersOfTwo(n){
    let num = []
    for (let i = 0; i <= n; i++) {
       num.push(2 ** [i])
    }
    return num
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(2));
console.log(powersOfTwo(3));

