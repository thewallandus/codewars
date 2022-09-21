/*

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

*/

// Formula: 1 + (1 / 4) + (1 / 4+3) + (1 / 4 + 6) + (1 / 4 + 9)
// n => number of times


function SeriesSum(n)
{
    let sum = 0
    let denom = 1
    for (let i = 1; i <= n; i++) {
      if (i === 1) {
            sum += 1
        } else {
            sum += 1 / (denom += 3)
        }
    }
    return n === 0 ? "0.00" 
            : sum.toFixed(2)
}