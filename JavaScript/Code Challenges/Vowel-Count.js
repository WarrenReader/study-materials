//Return the number (count) of vowels in the given string.  a, e, i, o, and u are vowels. The input string will only consist of lower case letters and/or spaces.

//CodeWars Link https://www.codewars.com/kata/vowel-count/train/javascript

//Sample Data
//getCount("abracadabra") //return 5

//Solution 1
function getCount(str) {
  let count = str.match(/[aeiou]/gi);
  return count !== null ? count.length : 0;
}