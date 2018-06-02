//Given an array/list [] of integers , Find the Nth smallest element in this array of integers. Notes: Array/list size is at least 3. Array/list's numbers could be a mixture of positives, negatives and zeros. Repeatition in array/list's numbers could occur, so Take duplications into account.

//CodeWars Link https://www.codewars.com/kata/nth-smallest-element-array-series-number-4/javascript

//Sample Data
//nthSmallest({3,1,2} ,2) ==> return (2)
//nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
//nthSmallest({2,169,13,-5,0,-1} ,4) ==> return (2)

//Solution 1
function nthSmallest(arr, pos){
  return arr.slice().sort((a,b) => a - b)[pos - 1]
 }
