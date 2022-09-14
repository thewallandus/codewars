/*

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/


function mygcd(x,y){
    let gcf = 0
    for (let i = 1; i <= x && i <= y; i++) {
  
      // check if is factor of both integers
      if( x % i === 0 && y % i === 0) {
         gcf = i
      }
  
    }
    return gcf
  }