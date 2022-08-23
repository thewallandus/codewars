/*

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

*/

// P => an array of strings that has sheep and wolf strings
// R => two string conditionals
// E => Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
// P => 

function warnTheSheep(queue) {
    // if wolf is the last string in the array === return pls go away and stop eating my sheep
    // if not then return Oi! Sheep number [insert number]! You are about to be eaten by a wolf!
    // sheep number => find index of wolf and +1 
		const index = queue.indexOf("wolf")
    console.log(index + 1)
  	if (queue[queue.length - 1] === 'wolf') {
      return "Pls go away and stop eating my sheep"
    } else {
      return `"Oi! Sheep number ${index + 1}! You are about to be eaten by a wolf!"`
    }

}