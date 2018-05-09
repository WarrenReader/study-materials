//You have an array of numbers. Your task is to sort ascending odd numbers but even numbers must be on their places. Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

//CodeWars Link: https://www.codewars.com/kata/sort-the-odd/javascript

//Sample Data
//let samp = [5, 3, 2, 8, 1, 4, 0];

//Solution 1
function sortArray(arr) {
  //Find Odd Number Indexes & Numbers
  let oddIndexes = [];
  let oddNumbers = [];
  arr.map((e, i) => {
    if(e%2 !== 0) {
      oddIndexes.push(i)
      oddNumbers.push(e)
    }
  })
  
  //Sort oddNumbers
  oddNumbers.sort((a,b) => a - b)
  
  //Insert oddNumbers Into arr
  for(let i = 0; i < oddIndexes.length; i++) {
    arr[oddIndexes[i]] = oddNumbers[i]
  }
  
  return arr
}