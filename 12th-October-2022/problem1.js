// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// More examples in test cases. Good luck!


function solve(s){
    // first if uppercase is more
    // or lowercase is more
    // create upper case array
    // create lowercase empty array
    // find which length is more
    // if uppercase length more => then turn lowercase into uppercase
    // if lowercase length more => then turn uppercase into lowercase
    const uppercase = []
    const lowercase = []
    for (let i = 0; i < s.length; i++) {
      if (s[i].toUpperCase() === s[i]) {
        uppercase.push(s[i])
      } else {
        lowercase.push(s[i])
      }
    }
  	return uppercase.length > lowercase.length ? s.toUpperCase() : s.toLowerCase()
}