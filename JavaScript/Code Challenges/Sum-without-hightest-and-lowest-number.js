//Sum all the numbers of the array except the highest and the lowest element (the value, not the index!). If array is empty, null or None, or if only 1 Element exists, return 0.

//CodeWars Link https://www.codewars.com/kata/sum-without-highest-and-lowest-number/javascript

//Sample Data
//let samp1 = [6, 2, 1, 8, 10] //returns 16
//let samp2 = [1, 1, 11, 2, 3] //returns 6

//Solution 1
function sumArray(arr) {
  if(arr === null || arr.length <= 1) return 0;

  return arr.slice().sort((a,b) => a - b).slice(1, arr.length - 1)
  .reduce((total, value) => total += value, 0);
}
