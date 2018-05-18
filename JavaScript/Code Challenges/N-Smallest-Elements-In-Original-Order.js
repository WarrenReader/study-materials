//Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with an array/list/vector of integers and the expected number n of smallest elements to return.
//Also: the number of elements to be returned cannot be higher than the array/list/vector length, elements can be duplicated, in case of duplicates, just return them according to the original order (see third example for more clarity).

//CodeWars Link https://www.codewars.com/kata/n-smallest-elements-in-original-order/javascript

//Sample Data
//firstNSmallest([1,2,3,4,5],3) //return  [1,2,3] 
//firstNSmallest([5,4,3,2,1],3) //return [3,2,1]
//firstNSmallest([1,2,3,4,1],3) //return [1,2,1]
//firstNSmallest([1,2,3,-4,0],3) //return [1,-4,0]
//firstNSmallest([1,2,3,4,5],0) //return []

//Solution 1
function firstNSmallest(arr, n){
  let sorted = arr.slice().sort((a,b) => b - a);
  let copy = arr.slice();

  for(let i = 0; i < arr.length - n; i++) {
    copy.splice(copy.lastIndexOf(sorted[i]), 1);
  }

  return copy
}