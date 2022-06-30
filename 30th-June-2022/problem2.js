/*

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

// P: option1, option2 as strings
// R: return string
// E: 'rock', 'scissors'. 'scissors', 'paper'.
// P: pseudo-code

const rps = (p1, p2) => {
    // p1 and p2 are string with the options
    // need a conditional: switch case statement
    // return the result
		if (p1 === p2) {
      return "Draw!"
    } else if (p1 === 'rock' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock') {
      return "Player 1 won!"
    } else if (p2 === 'rock' && p1 === 'scissors' || p2 === 'scissors' && p1 === 'paper' || p2 === 'paper' && p1 === 'rock') {
      return "Player 2 won!"
    }
};
