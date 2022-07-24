/*

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

function isValidWalk(walk) {
    let leftRight = 0
    let northSouth = 0
    // if north block has been walked add 1 to northSouth
    // if south block has been walked minus 1 from northSouth
    // if east block has been walked add 1 to leftRight
    // if west block has been walked minus 1 to leftRight
  	walk.forEach((element) => {
		return element === 'n' ? northSouth++ 
  			: element === 's' ? northSouth--
          	: element === 'e' ? leftRight++
          	: leftRight--
		})
  	if (walk.length != 10) {
      return false
    } else {
      return leftRight === 0 && northSouth === 0 ? true : false
    }
}
