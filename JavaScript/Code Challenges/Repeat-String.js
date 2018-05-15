//Write a function called repeatStr which repeats the given string string exactly n times.

//CodeWars Link https://www.codewars.com/kata/string-repeat/javascript

//Sample Data
//repeatStr(6, "I") // "IIIIII"
//repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//Solution 1
function repeatStr (n, s) {
  let str = '';
  for(let i = 0; i < n; i++)str += s;
  return str;
}

//Solution 2
function repeatStr (n, s) {
  return s.repeat(n);
}