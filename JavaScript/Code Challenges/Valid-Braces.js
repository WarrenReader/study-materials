//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.  All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}. A string of braces is considered valid if all braces are matched with the correct brace.

//CodeWars Link https://www.codewars.com/kata/valid-braces/train/javascript

//Sample Data
//"(){}[]"   =>  True
//"([{}])"   =>  True
//"(}"       =>  False
//"[(])"     =>  False
//"[({})](]" =>  False

//Solution 1
function validBraces(braces){
  if(braces.length%2 !== 0) return false;
  let length = braces.length;

  for(let i = 0; i < (length/2); i++) {
    if(braces.match(/\(\)/g)) {braces = braces.replace('()', '')}
    if(braces.match(/\{\}/g)) {braces = braces.replace('{}', '')}
    if(braces.match(/\[\]/g)) {braces = braces.replace('[]', '')}
    if(braces === '') break;
  }

  return braces === '' ? true : false;
}