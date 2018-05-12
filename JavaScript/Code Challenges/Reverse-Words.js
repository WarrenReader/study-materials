//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//CodeWars Link http://www.codewars.com/kata/reverse-words/javascript

//Sample Data
// let samp = 'This is an example!'; returns "sihT si na !elpmaxe"
// let samp2 = 'double  spaces'; returns "elbuod  secaps"

//Solution 1
function reverseWords(str) {
  return str.split(' ').map(e => e.split('').reverse().join('')).join(' ');
}