//Given an array of numbers, determine whether the sum of all of the numbers is odd or even. Give your answer in string format as 'odd' or 'even'. If the input array is empty consider it as: [0] (array with a zero).

// CodeWars Link: https://www.codewars.com/kata/odd-or-even/javascript
// Sample Data [0,1,2,3,4,5,6,7] - 'even'

//Solution 1
function oddOrEven(arr) {
  let value = arr.reduce((total, num) => total + num, 0);
  return value%2 === 0 ? 'even' : 'odd';
}

//Solution 2
function oddOrEven(arr) {
  return arr.reduce((total, num) => total + num, 0) % 2 ? 'odd' : 'true';
}