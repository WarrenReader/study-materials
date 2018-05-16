// Write a program that prints the numbers from 1 to 100. But for 
// multiples of three print “Fizz” instead of the number and 
// for the multiples of five print “Buzz”. For numbers which are 
// multiples of both three and five print “FizzBuzz”.

//Solution 1
for(var x = 1; x <= 100; x++) {
  if (x%3 === 0){
    if (x%5 === 0) {
      console.log("Fizzbuzz");
    } else {
      console.log("Fizz");
    } 
    } else if(x%5 === 0) {
      console.log("Buzz")
    } else {
      console.log(x);
    }
  }

//Solution 2
for(let i = 1; i <= 100; i++) {
  if(i%3 === 0 && i%5 === 0) {
    console.log('Fizzbuzz');
  } else if(i%3 === 0) {
    console.log('Fizz');
  } else if(i%5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i)
  }
}