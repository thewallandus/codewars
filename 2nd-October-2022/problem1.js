/*

/*

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26,

*/

function lowercaseCount(str){
    let count = 0
    let letters = /^[a-z]+$/
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(letters)) {
            count++
        }
    }
    return count
}

*/