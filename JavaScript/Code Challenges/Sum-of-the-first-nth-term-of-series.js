//Your task is to write a function which returns the sum of following series up to nth term(parameter). The series is 1, 1/4, 1/7, 1/10, 1/13, 1/16...
//Rules: 
//You need to round the answer to 2 decimal places and return it as String.
//If the given value is 0 then it should return 0.00
//You will only be given Natural Numbers as arguments.

//CodeWars Link https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

//Solution 1
function SeriesSum(n) {
  let counter = 16
  let series = [1, 1/4, 1/7, 1/10, 1/13, 1/16];
  let sum = 0.00;

  if(n > 6) {
    for(let i = 0; i < n - 6; i++) {
      counter += 3;
      series.push(1/counter);
    }
  }

  for(let i = 0; i < n; i++) {
    sum += series[i];
  }

  return sum.toFixed(2);
}

//Solution 2
function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}