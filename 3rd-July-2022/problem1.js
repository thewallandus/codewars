/*

Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

*/

// P: boolean, boolean \\ true if you are employed \\ true if on vacation
// R: true if employed and not on vacation
// R: false otherwise
// E: setAlarm(true, true),  false
// P: pseudocode

function setAlarm(employed, vacation){
    //coditional to check if yes or no
    if (employed === true && vacation === false) {
        return true
    } else {
        return false
    }
}