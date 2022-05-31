/*

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


*/
/* 

--------- PSEUDO CODE --------------

STEP 1: Take a year in. 
STEP 2: Check if there's a method to reduce the year to the largest integer value [google].
STEP 3: But first, turn the number into a decimal value so that Math.ceil works.
STEP 4: REturn the value.
*/


function century(year) {
    
    return Math.ceil(year / 100);   

}