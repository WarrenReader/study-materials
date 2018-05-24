//Given a List [] of n integers , find minimum mumber to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
//Notes
//List size is at least 2.
//List's numbers will only positives (n > 0).
//Repeatition of numbers in the list could occur.
//The newer list's sum should equal the closest prime number.

//CodeWars Link https://www.codewars.com/kata/transform-to-prime/javascript

//Sample Data
//minimumNumber([3,1,2])  //return 1
//minimumNumber([2,12,8,4,6]) //return 5
//minimumNumber(50,39,49,6,17,28) //return 2

//Solution 1
function minimumNumber(numbers){
  let total = numbers.reduce((total, e) => total += e);
  
  for(let i = total; i <= total + 100; i++) {
    let prime = true;
    for(let j = 2; j < i; j++) {
      if(i%j === 0) {prime = false; break;}
    }
    if(prime) {return i - total;}
  }
}