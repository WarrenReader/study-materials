//You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4). Return 0 if the elements can form such a sequence, and no number is missing (e.g. "1 2 4 3"). Return 1 if there are any non-numeric elements in the input (e.g. "1 2 a"). Return n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them (e.g. "1 2 4" or "1 5")

//CodeWars Link: https://www.codewars.com/kata/broken-sequence/javascript

//Sample Data:
// const samp1 = `1 2 3 4 5`;
// const samp2 = `1 5 7 4 3 8 2`
// const samp3 = `1 5 7 a 4 3 8 2`
// const empty = '';

//Solution 1
function findMissingNumber(str){
  if(str === '') return 0;
  let arr = str.split(' ').map(e => +e).sort((a,b) => a - b)
  if(arr.includes(NaN)) return 1;
  for(let i = 0; i < arr.length; i++) {
    if((i + 1) !== arr[i]) return i + 1;
  }
  return 0;
}