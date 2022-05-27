/* 

The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

// Is the input only a real number? And is it greater than >= 0? YES!
// Take in the input in km/hr.
// Run it through the formula to convert it to cm/second!

function cockroachSpeed(s) {
    return Math.floor(s / 0.036);
}
