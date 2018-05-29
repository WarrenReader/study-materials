//This time we want to write calculations using functions and get the results. Requirements: There must be a function for each number from 0 ("zero") to 9 ("nine"), There must be a function for each of the following mathematical operations: plus, minus,times, dividedBy (divided_by in Ruby), Each calculation consist of exactly one operation and two numbers, The most outer function represents the left operand, the most inner function represents the right operand.

//CodeWars Link https://www.codewars.com/kata/calculating-with-functions/javascript

//Sample Data
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

//Solution 1
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };

//Solution 2
function solve() {
  let num1 = arguments[0][0];
  let num2 = arguments[0][1];
  let action = arguments[0][2];
  
  switch(action) {
    case 'plus':
      return num1 + num2;
      break;

    case 'minus':
      return num1 - num2;
      break;

    case 'times':
      return num1 * num2;
      break;

    case 'divide':
      return num1 / num2;
      break;
    }
}

function zero() {
  if(arguments.length === 0) return 0;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([0, num, action]);
}

function one() {
  if(arguments.length === 0) return 1;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([1, num, action]);
}

function two() {
  if(arguments.length === 0) return 2;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([2, num, action]);
}

function three() {
  if(arguments.length === 0) return 3;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([3, num, action]);
}

function four() {
  if(arguments.length === 0) return 4;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([4, num, action]);
}

function five() {
  if(arguments.length === 0) return 5;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([5, num, action]);
}

function six() {
  if(arguments.length === 0) return 6;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([6, num, action]);
}

function seven() {
  if(arguments.length === 0) return 7;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([7, num, action]);
}

function eight() {
  if(arguments.length === 0) return 8;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([8, num, action]);
}

function nine() {
  if(arguments.length === 0) return 9;
  
  let num = arguments[0][0];
  let action = arguments[0][1];
  return solve([9, num, action]);
}

function plus(num) {
  return [num, 'plus'];
}

function minus(num) {
  return [num, 'minus'];
}

function times(num) {
  return [num, 'times'];
}

function dividedBy(num) {
  return [num, 'divide'];
}