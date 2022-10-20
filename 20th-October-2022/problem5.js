// 101 => e
// 97 => a
// 105 => i
// 111 => o
// 117 => u

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array

function isVow(a){
    const newA = a.map(number => {
        return number === 101 ? 'e' 
            : number === 97 ? 'a'
            : number === 105 ? 'i'
            : number === 111 ? 'o'
            : number === 117 ? 'u'
            : number
    })
    return newA
}
