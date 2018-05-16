//Find all prime numbers betwee 0 and n, where n is a provided integer. Return an array.

//Solution 1
function prime(n) {
  let primeNumbers = [];
  if(typeof n !== 'number') return 'You must provide a number'; //Check to see if provided argument is a number
  if(n < 2) return 'Number must be greater than 2'; //Check to see if provided argument is greater than 2
  for(let i = 2; i <= n; i++) {
    let flag = true;
    for(let j = 2; j < i; j++) {
      if(i%j === 0) {flag = false; break}
    }
    if(flag) primeNumbers.push(i);
  }
  return primeNumbers;
}