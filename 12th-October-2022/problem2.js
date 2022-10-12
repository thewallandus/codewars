/*

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

function vowelIndices(word){
    // create a list of vowels
    // create an empty array to store the location
    // run a for loop
    // and check if the word has any vowel
    // push i into an array if there is a match
    const wordInArray = word.split('')
    const vowels = ["a", "e", "i", "o", "u", "y"]
    const indexWord = []
    for (let i = 0; i < wordInArray.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j] || word[i] === vowels[j].toUpperCase()) {
                indexWord.push(i + 1)
            }
        }
    }
    return indexWord
}