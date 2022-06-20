/* 

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

*/

// CLOCK shows h hours.
// Clock shows m minutes.
// Clock shows s seconds.
// Create a function.
// This function will take in 3 parameters: hours, minutes, seconds.
// Create 3 variables that convert the total number of hours, minutes, and seconds into milliseconds.
// Then return the sum of these 3 variables.

function past(hours, minutes, seconds) {
    const totalHoursInMs = hours * 60 * 60 * 1000;
	const totalMinutesInMs = minutes * 60 * 1000;
    const secondsInMs = seconds * 1000;
  
  return totalHoursInMs + totalMinutesInMs + secondsInMs
}
