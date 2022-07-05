/*

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

// P: parameters: an array of strings. 
// R: total points
// E: ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
// P: pseudo-code


function points(games) {
    // create a variable totalscore of X 
   // wrap a for loop with total 10 matches
  // and 3rd character of the array's element
    // and 1st character of the array's element
  // if condition met change the score
		let score = 0;
  	for (let i = 0; i < games.length; i++) {
      if (Number(games[i][0]) > Number(games[i][2])) {
        score += 3
      } else if (Number(games[i][0]) < Number(games[i][2])) {
        score += 0
      } else if (Number(games[i][0]) === Number(games[i][2])) {
        score += 1
      }
    }
  	return score
  }