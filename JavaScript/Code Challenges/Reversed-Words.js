//Complete the solution so that it reverses all of the words within the string passed in.

//CodeWars Link http://www.codewars.com/kata/reversed-words/javascript

//Sample Data
// let samp = "The greatest victory is that which requires no battle"

//Solution 1
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}