/*

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

// P: parameters: a string integer or an empty string
// R: a string with all character except the last 4 as nums => the rest are all hashes
// E: "4556364607935616" --> "############5616"
// P: pseudo-code

// return masked string
function maskify(cc) {
    // condition to check if string is greater than 4 characters 
    // if no, then just return string as is
    // if yes, then start magic as described below
    // in that case initiate a for loop
    // set iterator to 4 => that's the 5th character
    // change them all to #
}