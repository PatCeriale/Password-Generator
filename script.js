// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Create generatePassword function

// TODO: Add validations to make sure at least one type of character is selected and alert if none are

// TODO: Create a prompt to ask length of password and save it to a variable

// TODO: Add validation to the length to make sure it is between 8-128 characters

// TODO: After prompts are completed, create password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Lowercase character array
var lowercaseLetterOffset = 0xfeff0061;
var lowercaseArray = [];
for (let i = 0; i < 26; i++) {
  lowercaseArray[i] = String.fromCharCode(lowercaseLetterOffset + i);
}
//Uppercase character array
var uppercaseLetterOffset = 0xfeff0041;
var uppercaseArray = [];
for (var i = 0; i < 26; i++) {
  uppercaseArray[i] = String.fromCharCode(uppercaseLetterOffset + i);
}
//Number character array
var numberOffset = 0xfeff0030;
var numberArray = [];
for (var i = 0; i < 10; i++) {
  numberArray[i] = String.fromCharCode(numberOffset + i);
}
//Symbol character array
var symbolArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  " ",
  '"',
  "'",
  "+",
  ",",
  "-",
  ".",
  "/",
  ";",
  ":",
  "<",
  ">",
  "=",
  "?",
  "[",
  "]",
  "\\",
  "_",
  "`",
  "~",
  "{",
  "}",
  "|",
];

function generatePassword() {
  let password = "";
  // Confirms what characters the user wishes to use. Alert user and loop confirms if no criteria was chosen.
  let useLowercase = false;
  let useUppercase = false;
  let useNumber = false;
  let useSymbol = false;
  while (!useLowercase && !useUppercase && !useNumber && !useSymbol) {
    useLowercase = confirm("Do you want lowercase?");
    useUppercase = confirm("Do you want uppercase?");
    useNumber = confirm("Do you want number?");
    useSymbol = confirm("Do you want symbol?");
    if (!useLowercase && !useUppercase && !useNumber && !useSymbol) {
      alert("Some criteria must be selected to generate password");
    }
  }

  let charactersToUse = [];
  // conditionally (if) add characters to charactersToUse from other arrays
  if (useLowercase === true) {
    password +=
      //if array is chosen, in this case lowercase,
      lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
    charactersToUse = charactersToUse.concat(lowercaseArray);
  }
  if (useUppercase === true) {
    password +=
      uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
    charactersToUse = charactersToUse.concat(uppercaseArray);
  }
  if (useNumber === true) {
    password += numberArray[Math.floor(Math.random() * numberArray.length)];
    charactersToUse = charactersToUse.concat(numberArray);
  }
  if (useSymbol === true) {
    password += symbolArray[Math.floor(Math.random() * symbolArray.length)];
    charactersToUse = charactersToUse.concat(symbolArray);
  }

  console.log(charactersToUse);

  let passwordLength;
  // while the user gives an invalid response ask again
  while (
    isNaN(passwordLength) ||
    (passwordLength < "8" && passwordLength > "128")
  ) {
    passwordLength = prompt("How long should the password be?");
  }

  // for the number of times that the user specified add a new random character to our password

  for (let i = password.length; i < passwordLength; i++) {
    let newChar =
      charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
    // generate a new character with charactersToUse

    password += newChar;
  }

  return password;
}
