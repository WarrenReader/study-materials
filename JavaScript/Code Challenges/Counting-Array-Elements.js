//Write a function that takes an array and counts the number of each unique element present. For example ['james', 'james', 'john'] returns { 'james': 2, 'john': 1}

//CodeWars Link: https://www.codewars.com/kata/counting-array-elements/javascript

//Sample Data
//let samp = ['james', 'james', 'john', 'warren', 'orion', 'john']

//Solution 1
function count(arr){
  let count = {};
  arr.map(e => {
    if(!(e in count)){
      count[e] = 1;
    } else {
      count[e]++
    }
  })
  return count
}

//Solution 2
function count(arr){
  let names = {};
  arr.forEach(e => names[e] ? names[e]++ : names[e] = 1)
  return names;
}
