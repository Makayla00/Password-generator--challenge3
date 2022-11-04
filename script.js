// Assignment code here

var checkChar1 = false;
var checkChar2 = false;
var check = false;

// var justUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var justLower = "abcdefghijklmnopqrstuvwxyz"
// var justNum = "0123456789"
// var justSpec = "!@#$%^&*()"
// var justC1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// var justc2 = "0123456789!@#$%^&*()"
// var upperNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// var lowerNum = "abcdefghijklmnopqrstuvwxyz0123456789"
// var upperSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"
// var lowerSpec = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()"
// var upperC2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
// var lowerC2 = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
// var allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function genPassword(){
const passLength = String ( prompt ("How many charcters would you like your pass word to be ? (8-128)"));
console.log (passLength) ;
if (passLength < 8){
  alert (" your password must be at least 8 charcters.");
  console.log ("length not good.");
}else if (passLength > 128 ){
  alert ("your password must be less then 128 charcters.");
    console.log ("length not good.");
}else {
  alert("Great! Your password will have " + passLength + " charcters in it.");
  console.log ("length good.");
  specialSlect();
}

function specialSlect (){
 const upper =Boolean( confirm ("would you like Upper case letters?"));
    console.log (upper);
 const lower =Boolean ( confirm("would you like lower case letters?"));
    console.log (lower);
 const specialChar =Boolean (confirm("Would you like special charcters?"));
    console.log (specialChar);
 const numbers =Boolean( confirm("would you like numbers ?"));
    console.log (numbers);
  var checkChar1 =( upper || lower );
   console.log ("check 1 " + checkChar1);
  var checkChar2 = (specialChar || numbers);
  console.log ("check 2 " + checkChar2);
  var check = (checkChar1 || checkChar2);
  console.log ("result " + check);
if (check === false){
  alert ("you need to have at least one special selection.");
specialSlect();
} else {
 console.log (" generating now");
}


for (var i = 0; i <= passLength; i++){
  var randomNumber = math.floor(math.random()* allChar.length);
  password +=allChar.substring(randomNumber, randomNumber +1);
}



}

}





// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// PSUDO CODE

// prompt "how many charcters (8-128) do you want your password to be" 
// if less then 8 charcter say "password must be at least 8 charcters"
// else if more then 128 say "password needs to be less then 128 charcters"
// else move on & alert "ok your password will have __ charcters"


// Prompt "do you want special charcers 
// if yes Prompt " what special charcters would you like to add"
      // if not a vaild specal charcter prompt "That one is not accepted please choose a differnt one"
      // else if still not acepted repeat last
      // else move on & alert "ok your special charcter will be added to your password"
// else move on

// prompt "would you like numbers"
// if yes prompt "what number would you like to add"
      // alert "ok that number will be added to your password"
// else move on

// if no special charcters or numbers alert "lowercase and capital letters will be added" 
// else prompt " would you like lower case and capital letters"
      // if yes add & alert "ok sounds good both lowercase and cappital letters will be included in your password"
      // else move on
