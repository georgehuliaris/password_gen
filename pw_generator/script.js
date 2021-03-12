// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // This is the window prompt for the character input from the user
  var generatedPassword = "";
  var characterLength = window.prompt(
    "How many characters would you like to use? "
  );

  //This turns makes the code think the string is a number
  var characterLengthNumber = parseFloat(characterLength);
//This prompts user to select a number if it is not a number
  if (isNaN(characterLengthNumber) === true) {
    alert("Hey dude, why don't you pick a number?");
    return generatedPassword;
  }
// This makes sure the users input of the number is in between 8 and 128
  if (characterLengthNumber < 8 || characterLengthNumber > 128) {
    alert("Hey dude, why don't you pick a number that's in between 8 and 128?");
    return generatedPassword;
  }
  // this asks the user if they would like to use special characters, true or false
  var specialCharactersBoolean = window.confirm(
    "Would you like to use special characters?"
  );
  // this asks the user if they would like to use capital letters and returns true or false
  var capitalCharactersBoolean = window.confirm(
    "Would you like to use capital letters?"
  );

  // this asks the user if they would like to use numbers
  var numberCharactersBoolean = window.confirm(
    "Would you like to use numbers?"
  );
  // this asks the user if they would like to use lower case letters
  var lowerCharacterBoolean = window.confirm(
    "Would you like to use lowercase letters?"
  );
  
  // if they dont select a character set, it will show them this message
  if (!lowerCharacterBoolean && !capitalCharactersBoolean && !specialCharactersBoolean && !numberCharactersBoolean) {
    alert("Uhh... you gotta pick something...");
    return generatedPasswordgit;
  }

  // created variables and turned them from strings into arrays using split
  var capitalCharacters = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");
  var lowercaseCharacters = "abcdefhijklmnopqrstuvwxy".split("");
  var numberCharacters = "123456789".split("");
  var specialCharacters = "=!@#$%^&*()_+-".split("");

  //picks random character based on choice of characters selected
  if (specialCharactersBoolean === true) {
    generatedPassword =
      generatedPassword +
      specialCharacters[
        Math.floor(Math.random() * getRandomInt(specialCharacters.length - 1))
      ];
  }
  if (capitalCharactersBoolean === true) {
    generatedPassword =
      generatedPassword +
      capitalCharacters[
        Math.floor(Math.random() * getRandomInt(capitalCharacters.length - 1))
      ];
  }
  if (numberCharactersBoolean === true) {
    generatedPassword =
      generatedPassword +
      numberCharacters[
        Math.floor(Math.random() * getRandomInt(numberCharacters.length - 1))
      ];
  }
  if (lowerCharacterBoolean === true) {
    generatedPassword =
      generatedPassword +
      lowercaseCharacters[
        Math.floor(Math.random() * getRandomInt(lowercaseCharacters.length - 1))
      ];
  }

  //these are variables that roll into a larger set called "selected characters" for a pool of characters to select from
  var capitalCharacters = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  var lowercaseCharacters = "abcdefhijklmnopqrstuvwxy";
  var numberCharacters = "123456789";
  var specialCharacters = "=!@#$%^&*()_+-";

  var selectedCharacters = "";
  if (specialCharactersBoolean === true) {
    selectedCharacters = selectedCharacters + specialCharacters;
  }

  if (lowerCharacterBoolean === true) {
    selectedCharacters = selectedCharacters + lowercaseCharacters;
  }

  if (numberCharactersBoolean === true) {
    selectedCharacters = selectedCharacters + numberCharacters;
  }

  if (capitalCharactersBoolean === true) {
    selectedCharacters = selectedCharacters + capitalCharacters;
  }

  var passwordLength = generatedPassword.length;

  var charactersToAdd = characterLength - passwordLength;

//brings that pool of selected character types together to select random ones
  
  for (var i = 0; i < charactersToAdd; i++) {
    generatedPassword =
      generatedPassword +
      selectedCharacters.split("")[
        Math.floor(Math.random() * getRandomInt(selectedCharacters.length - 1))
      ];
    
  }

  selectedCharacters.split("");
  

  

  return generatedPassword;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
