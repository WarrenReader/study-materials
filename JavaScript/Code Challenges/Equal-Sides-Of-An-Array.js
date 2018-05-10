//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

//Example
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

//CodeWars Link: https://www.codewars.com/kata/equal-sides-of-an-array/javascript

//Sample Data
//let samp = [1,2,3,4,3,2,1]

//Solution 1
function findEvenIndex(arr) {
  for(let i = 1; i < arr.length - 1; i++) {
    let left = arr.slice(0, i).reduce((t,e) => t + e);
    let right = arr.slice(i + 1).reduce((t,e) => t + e);
    if(left === right) return i;
  }
  return -1;
}
