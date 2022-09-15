/*

Your task is to write function factorial.

*/

function factorial(n){
    const arr = []
     for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr.reduce((prev, curr) => prev * curr, 1);
  }