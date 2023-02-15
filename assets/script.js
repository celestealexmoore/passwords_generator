/* 
on page load, set window prompts.

do you want uppercase?
do you want lowercase?
do you want numbers?
do you want special characters?

If user answers yes, store adjacent array to variable.

once all questions have been answered, innerText of box should read
"click generate password to see your password."

create clipboard icon(?) to save to users clipboard. Search how to copy.

When generate password is clicked, 
randomize the array with all the characters.
I want to set finalPassword variable = get first (set number of characters) from array.
*/

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialCharacters = ["-", "_", "!", "@", "$", "/","~"];
let passwordChoices = [];
let finalPassword;

let charCount = prompt('How many letters would you like your password to contain?', 'Enter a number between 8-128.')

function sanitize(charCount) { 

    if(charCount < 8 || charCount > 128 || isNaN(charCount)) {
        let revisedCharCount = prompt('How many letters would you like your password to contain?', 'Enter a number between 8-128.')
        sanitize(revisedCharCount)
    }
}

sanitize(charCount)
