//Create a function that returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//CodeWars Link: http://www.codewars.com/kata/string-ends-with/javascript

//Sample Data
//function example('abc', 'bc') // true
//function example('abc', 'd') // false

//Solution 1
function solution(str, ending){
  let end = str.substring(str.length - ending.length)
  return end === ending ? true : false;
}

//Solution 2
function solution(str, ending){
  return str.endsWith(ending);
}