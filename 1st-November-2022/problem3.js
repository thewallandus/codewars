/*

Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.

*/

function divCon(x){
    const numbers = x.length === 0 ? null : x.filter(item => typeof item === 'number').reduce((acc, num) => acc + num, 0)
    const Strings =  x.length === 0 ? null : x.filter(item => typeof item === 'string').map(item => parseInt(item)).reduce((acc,num) => acc + num, 0)
    return x.length === 0 ? 0 : Nums - Strings
}