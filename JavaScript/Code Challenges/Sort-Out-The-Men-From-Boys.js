//Men are the Even numbers and Boys are the odd. Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys. 
//Notes
//Return an array/list where Even numbers come first then odds
//Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
//Array/list size is at least 4 .
//Array/list numbers could be a mixture of positives , negatives .
//Have no fear , It is guaranteed that no Zeroes will exists .
//Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

//CodeWars Link https://www.codewars.com/kata/sort-out-the-men-from-boys-1/javascript

//Sample Data
//let samp = [82,91,72,76,76,100,85];  //returns [ 72, 76, 82, 100, 91, 85 ]

//Solution 1
function menFromBoys(arr){
  let copy = arr.slice();
  let organizedArr = [];
  let finalArr = [];

  //get evens
  organizedArr = [...copy.filter(e => e%2 === 0).sort((a,b) => a - b)];
  //get odds
  organizedArr = [...organizedArr, ...copy.filter(e => e%2 !== 0).sort((a,b) => b - a)]
  //remove duplicates
  for(let i = 0; i < organizedArr.length; i++) {
    if(finalArr.indexOf(organizedArr[i]) === -1) finalArr.push(organizedArr[i]);
  }

  return finalArr;
}
