//Array indices are zero-based; this means that the first element of an array is at index 0. You will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices. To make this interesting, array lengths in random tests will have up to 5000 elements.

//CodeWars Link https://www.codewars.com/kata/sum-of-prime-indexed-elements/javascript

//Sample Data
// let samp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; //return 85
//let samp2 = [1,2,3,4,5,6,7,8,9,10,11]; //return 21

function total(arr){
  let primeNumbers = [];
  for(let i = 2; i < arr.length; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
      if(i%j === 0) {isPrime = false; break;}
    }
    if(isPrime) primeNumbers.push(i);
  }
  return primeNumbers.reduce((total, e) => total += arr[e], 0)
}