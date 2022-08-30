/*

 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

*/

// P => a string character + an array
// R => an array
// E => 'R', [3, 2, 1, 2] ->  [1, 2, 2, 3]
// P

const flip=(d, a)=>{
    // if R => then right => in which case the array is sorted from left to right 
    // if L => then left => in which case the array is sorted from right to left
    return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) =>  b - a)     
}