/*

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

// P: an array
// R: return a string
// E: example => (well(['bad', 'bad', 'bad']), 'Fail!')
// P

function well(x){
    // create a count variable and set it to 0
    // for every good in x add 1 to count
    // then check with a conditional if the parameters are met and return the corresponding string
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        x[i] === "good" ? count++ : false
    }
    return count === 0 ? "Fail" 
        : count < 2 ? "Publish!"
        : "I smell a series!"
}