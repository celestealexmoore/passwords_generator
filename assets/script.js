const passwordBox = document.getElementById('passwordBox');
const generateBtn = document.getElementById('generateBtn');
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChars = ["-", "_", "!", "@", "$", "/","~"];
let sanitizedCharCount;
let passwordChoices = [];
let finalPassword = [];

let charCount = prompt('How many letters would you like your password to contain?', 'Enter a number between 8-128.')

function sanitize(charCount) { 
    if(charCount < 8 || charCount > 128 || isNaN(charCount)) {
        sanitizedCharCount = prompt('How many letters would you like your password to contain?', 'Enter a number between 8-128.')
        sanitize(sanitizedCharCount)
    }else {
        sanitizedCharCount = charCount;
    }
}
sanitize(charCount)

if(confirm("Do you want your password to contain Capital Letters?")) {
    passwordChoices = passwordChoices.concat(uppercase);
}if(confirm("Do you want your password to contain Lowercase Letters?")) {
    passwordChoices = passwordChoices.concat(lowercase);
}if(confirm("Do you want your password to contain Numbers?")) {
    passwordChoices = passwordChoices.concat(numbers);
}if(confirm("Do you want your password to contain Special Characters?")) {
    passwordChoices = passwordChoices.concat(specialChars);
}

const boxTextPrompt = document.createElement("p");
boxTextPrompt.innerText = "Click Generate Password to see your password."
passwordBox.appendChild(boxTextPrompt);

let clicked = false;

generateBtn.onclick = function() {
    if(clicked === true) {
        return;
    }

    for(let i = passwordChoices.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = passwordChoices[i];
        passwordChoices[i] = passwordChoices[j];
        passwordChoices[j] = temp;
    }

    for(let i = 0; i < sanitizedCharCount; i++) {
        finalPassword.push(passwordChoices[i]);
    }
    boxTextPrompt.innerText = finalPassword.join('');
    clicked = true;
}