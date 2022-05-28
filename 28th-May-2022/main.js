/* 

PROBLEM 1:

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


*/

// Take the number which will always be a positive integer greater than 0.
// Create a variable that starts at 0.
// Run a for loop that starts at 1 and loop thorugh to the num.
// Then it adds it all to the variable.
// Then it returns the value.

let summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
       sum = sum + i;
    }
    return sum;
}

summation(5); 
summation(3);


// 5 + 4 + 3 + 2 + 1 = 15.
// 3 + 2 + 1 = 6.

// PROBLEM TWO

// Simple, remove the spaces from the string, then return the resultant string.

// SPLIT THE STRING THROUGH THE PARTS THAT HAVE A SPACE AND CREATE AN ARRAY.
// THEN JOIN THEN TOGETHER.

function noSpace(x){
    return x.split(" ").join("");
}