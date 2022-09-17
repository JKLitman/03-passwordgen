// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*"
var characters = 0;
var generateBtn = document.querySelector("#generate");

function total_char() {
  var char_num = ""
  while (char_num<=7 && char_num<=129){
    window.alert("Choose between 8 and 128 characters.");
    char_num=prompt ("Enter number of desired characters here.");
  }
}
function add_num () {
  use_num=confirm ("Allow numbers?")
}
function add_lower () {
  use_lower=confirm ("Allow lowercase letters?")
}
function add_upper () {
  use_upper=confirm ("Allow uppercase letters?")
}
function add_special () {
  use_special=confirm ("Allow special characters?")
}
function generatePassword() {
  total_char ();
  add_num();
  add_lower();
  add_upper();
  add_special();
  var characters="";
  // var selections="";
  if(use_num==true) {
    characters+= number;
  }
  if(use_lower==true) {
    characters+= lower;
  }
  if(use_upper==true) {
    characters+= upper;
  }
  if(use_special==true) {
    characters+= special;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)
// Add event listener to generate button