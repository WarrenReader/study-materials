//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized. 

//CodeWars Link https://www.codewars.com/kata/convert-string-to-camel-case/javascript

//Sample Data
//toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

//Solution 1
function toCamelCase(str){
  if(str === '') return '';
  let firstLetterUppercased = (str[0] === str[0].toUpperCase());
  let newString;

  //Has Dashes
  if(str.match(/-/g)) {
    newString = str.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join('');
  }
  //Has Underscores
  if(str.match(/_/g)) {
    newString = str.split('_').map(e => e[0].toUpperCase() + e.slice(1)).join('');
  }
  // Check Case On First First Letter
  if(!firstLetterUppercased) {
    newString = newString[0].toLowerCase() + newString.slice(1);
  }

  return newString;
}

//Solution 2
function toCamelCase(str){
  let regEx = /[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
    });
}