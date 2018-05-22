// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//CodeWars Link https://www.codewars.com/kata/rot13-1/javascript

//Sample Data
//rot13("abcdefghijklmnopqrstuvwxyz") //returns nopqrstuvwxyzabcdefghijklm

//Solution 1
function rot13(message){
  let regexp = /[A-Za-z]/;
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  return message.split('').map(e => {
    //Check If Letter
    if(regexp.test(e)) {
      //Check Case
      let upperCase = false;
      if(e.toUpperCase() === e) {
        upperCase = true;
      }
      //Loop Through Alphabet
      let letterIndex = alphabet.indexOf(e.toLowerCase());
      let newLetter = '';

      for(let i = 0, j = letterIndex; i < 13; i++) {
        j++;
        j > 25 ? j = 0 : null;
        newLetter = alphabet[j];
      }
      if(upperCase) return newLetter.toUpperCase();
     
      return newLetter;
    }
    return e;
  }).join('');
}