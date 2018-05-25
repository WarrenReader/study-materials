//Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

//CodeWars Link https://www.codewars.com/kata/fizz-slash-buzz/javascript

//Sample Data
//solution(20) //returns [5, 2, 1]

//Solution 1
function solution(number){
  let result = [];
  let arr = [];

  for(let i = 1; i < number; i++) {
    if(i%3 === 0 && i%5 === 0) {arr.push('FizzBuzz')}
    else if(i%3 === 0)         {arr.push('Fizz')} 
    else if(i%5 === 0)         {arr.push('Buzz')}
    else                       {arr.push(i)}
  }
  
  result.push(arr.filter(e => e === 'Fizz').length);
  result.push(arr.filter(e => e === 'Buzz').length);
  result.push(arr.filter(e => e === 'FizzBuzz').length);

  return result;
}