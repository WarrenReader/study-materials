// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// CodeWars Link https://www.codewars.com/kata/unique-in-order/javascript

//Sample Data
//let samp = ('AAAABBBCCDAABBB');

//Solution 1
function uniqueInOrder(input) {
  let arr = [];
  if(typeof input === 'string') input = input.split('');
  
  input.map(e => e !== arr[arr.length - 1] ? arr.push(e) : null)
  
  return arr;
}