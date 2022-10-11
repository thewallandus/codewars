/*

Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .

*/

function maxMultiple(divisor, bound){
    const arr = []
    for (let i = 0; i <= bound; i+=divisor) {
        if (i % divisor === 0) {
            arr.push(i)
        }
    }
    return Math.max(...arr) 
}