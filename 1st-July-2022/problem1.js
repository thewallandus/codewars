/*

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

// P: number that is an integer and 0
// R: either empty string or num + sheep...
// E: countSheep(0), "" || (countSheep(1), "1 sheep...")
// P: pseudo-code


let countSheep = function (num){
    // create an empty string
    // do concatenation num times using a simple loop    
  	let str = "";
  	if (num === 0) {
      return str
    } else if (num > 0) {
      	for (let i = 1; i <= num; i++) {
      	str += `${i} sheep...`
    	}
    }
  	return str;
}
