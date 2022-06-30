/*

PROBLEM1:
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

*/

// P: parameters: string
// R: change string that has letter S, O, I, into 5, 0, 1: returns a new string
// E: ("L0ND0N"),"LONDON": ("DUBL1N"),"DUBLIN"
// P: pseudocode

function correct(string)
{
  	//create a new string
    let newStr = '';
  	// loop through the string's characters
  	// conditional to check 5, 0, 1 into S, O, I
		// return newStr
  
  	for (let i = 0; i < string.length; i++) {
      switch(string[i]) {
        case '5':
          newStr += 'S'
          break;
        case '0':
          newStr += 'O'
          break;
        case '1':
          newStr += 'I'
          break;
        default:
          newStr += string[i]
          break;
      }
    }
  return newStr	
}

correct("L0ND0N");
correct("DUBL1N");