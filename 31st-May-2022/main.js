/* 

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

// P: Is the number always positive? Could it be negative? Could it be 0?
// Is there a built in method I can use to run this [google]?

function repeatStr (n, s) {
    return `${s.repeat(n)}`
}