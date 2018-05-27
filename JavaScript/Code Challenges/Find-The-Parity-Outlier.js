//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//CodeWars Link https://www.codewars.com/kata/find-the-parity-outlier/javascript

//Sample Data
//[2, 4, 0, 100, 4, 11, 2602, 36] //returns 11
//[160, 3, 1719, 19, 11, 13, -21] //returns 160

//Solution 1
function findOutlier(integers){
  let even = [];
  let odd = [];
  integers.forEach(e => e%2 === 0 ? even.push(e) : odd.push(e))
  return odd.length > even.length ? even[0] : odd[0];  
}