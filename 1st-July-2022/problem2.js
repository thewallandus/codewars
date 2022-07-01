/*

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

*/

// P: is an integer number 
// R: is an integer number
// E: squareDigits(3212), 9414 AND squareDigits(2112), 4114
// P: pseudo-code


function squareDigits(num){
    // I take in an integer
    // then create a new variable that turns it into a string
    // Then run it through a for loop 
    // new empty variable += "NUM(str[i]) ** 2"
    // return NUM of the new string variable
		let newNum = num.toString();
  	let str = "";
  	for (let i = 0; i < newNum.length; i++) {
      str += Number(newNum[i]) ** 2
    }
  	return Number(str)
}