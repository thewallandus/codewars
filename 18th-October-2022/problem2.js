/*

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

*/


function alphabetWar(fight) {
    let sumLeft = 0
    let sumRight = 0
    for (let i = 0; i < fight.length; i++) {
        if (fight[i] === 'w') {
            sumLeft += 4
        } else if (fight[i] === 'p') {
            sumLeft += 3
        } else if (fight[i] === 'b') {
            sumLeft += 2
        } else if (fight[i] === 's') {
            sumLeft += 1
        } else if (fight[i] === 'm') {
            sumRight += 4
        } else if (fight[i] === 'q') {
            sumRight += 3
        } else if (fight[i] === 'd') {
            sumRight += 2
        }else if (fight[i] === 'z') {
            sumRight += 1
        } 
    }
    return sumRight > sumLeft ? "Right side wins!"
        : sumLeft > sumRight ? "Left side wins!"
        : "Let's fight again!"
}