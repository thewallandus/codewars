/*

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

// P: one integer >= 1
// return an array with humanyears, catyears, dogyears
// E: humanYearsCatYearsDogYears(1), [1,15,15]
// P: pseudo-code


var humanYearsCatYearsDogYears = function(humanYears) {
    // create a variable for cat years
    // create a conditional for cat years with the correct reassignment
    // create a variable for dog years
    // create a conditional for dog years with the correct reassignment
		let catYears = 0;
  	let dogYears = 0;
  	let arr = []
    if (humanYears === 1) {
      catYears += 15
      dogYears += 15
    } else if (humanYears === 2) {
      catYears += 15 + 9
      dogYears += 15 + 9
    } else if (humanYears >= 3) {
      catYears = catYears + 15 + 9 + ((humanYears - 2) * 5)
      dogYears = dogYears + 15 + 9 + ((humanYears - 2) * 4)
    }
  	arr = [humanYears, dogYears, catYears]
  	return arr
}
  