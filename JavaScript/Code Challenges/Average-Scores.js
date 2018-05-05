//Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// CodeWars Link: https://www.codewars.com/kata/average-scores/javascript

// Sample Data 
//let data = [73, 64, 63, 76, 98, 76, 56, 87, 73, 94];

//Solution 1
function average(scores) {
  return Math.round(scores.reduce((total, num) => total + num) / scores.length);
}