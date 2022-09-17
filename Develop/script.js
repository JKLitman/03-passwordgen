// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*"
var characters = 0;
var generateBtn = document.querySelector("#generate");

function total_char() {
  while (char_num<=7 && char_num<=129){
    window.alert("Choose between 8 and 128 characters.");
    char_num=prompt ("Enter number of desired characters here.");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
