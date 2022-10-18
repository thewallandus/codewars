/*

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

*/

function findLongest(array){
    const arrayLength = []
    const newArr = array.map(item => `${item}`)
    newArr.forEach(item => arrayLength.push(item.length))
    const maxLength = Math.max(...arrayLength)
    const newArray = newArr.filter(item => item.length === maxLength)
    return newArray[0]
}