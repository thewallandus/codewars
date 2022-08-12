/*

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:

Sum of a sequence (this kata)

*/

// P Three integers => beginning value, end value, step up value
// R: returns one integer
// // E: 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)


const sequenceSum = (begin, end, step) => {
    // create conditional to check if begin value is greater than end
    // if yes => throw 0
    // if no => then run your function
    // create a for loop in case of no
    // set the initial value as begin
    // set the end value as end => make it inclusive of end
    // increment by i + step
    // create a sum variable that is 0
    // the for loops runs through the beginning and the end and adds to sum
    // return sum
    let sum = 0;
    if (begin > end) {
        return 0
    } else {
        for (let i = begin; i <= end; i += step) {
            sum += i
        }
    }
    return sum
};