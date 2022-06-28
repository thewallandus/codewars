/*

PROBLEM 2: There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

// P: receive an array with class test scores, and your score
// R: return either true or false
// E: [2, 3], 5
// P: pseudocode


function betterThanAverage(classPoints, yourPoints) {
    // first need an iterator that gives the sum of everything
    // Then it stores the sum in a variable
    // Then add this variable to yourpoints
    // then run a contional 
		let sum = classPoints.reduce((element, accumulator) => {
      return element + accumulator
    }, 0)  
		let average = (sum + yourPoints) / (classPoints.length + 1);
  	if (yourPoints > average) {
      return true
    } else {
      return false
    }
}
  
betterThanAverage([2, 3], 5)
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);