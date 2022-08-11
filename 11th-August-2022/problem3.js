/*

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

//P: array
//R: array
//E: solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//P: 

function solution(nums){
    // take the array
    // sort it in ascending order
    // nums.sort(function(a, b){return a-b})
    // return nums
    // check if it's null 
    // check if length is 0
    if (nums === null) {
      return []
    } else {
      return nums.sort(function(a, b){return a-b})
    }
  }