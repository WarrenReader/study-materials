//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. Hint: Do not modify the original array.

//CodeWars Link https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/javascript

//Sample Data
//let samp = [19, 5, 42, 2, 77];

//Solution 1
function sumTwoSmallestNumbers(numbers) {
  let sorted = numbers.slice().sort((a,b) => a - b)
  return sorted[0] + sorted[1]
}