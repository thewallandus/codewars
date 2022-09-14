/*

Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

*/


function mygcd(x,y){
    const xArr = []
    const yArr = []
    for (let i = 1; i <= x; i++) {
        if (x % i === 0) {
            xArr.push(i)
        }
    }
    for (let j = 1; j <= x; j++) {
        if (y % j === 0) {
            yArr.push(j)
        }
    }
  	const xAndY = []
    for (let a = 0; a < xArr.length; a++) {
      for (let b = 0; b < yArr.length; b++) {
        if (xArr[a] === yArr[b]) {
          xAndY.push(yArr[b])
        }
      }
    }
  return Math.max(...xAndY)
}