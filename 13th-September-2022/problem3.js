/*

Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/

function rowWeights(array){
    // create two arrays
  	// one to store first index values
  	// second to store second index values
  	// sum both
  	// return both in array
    if (array.length === 1) {
        return [array[0], 0]
    } else {
        const arr1 = []
    const arr2 = []
    for (let i = 0; i < array.length; i+=2) {
      arr1.push(array[i])
    }
  	for (let j = 1; j < array.length; j+=2) {
      arr2.push(array[j])
    }
  	return [(arr1.reduce((item, acc) => item + acc)), (arr2.reduce((item,acc) => item + acc))]
    }
  	
  }