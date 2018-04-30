//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Creat a function that determines whether a string that contains only letters is an isogram. Assume that an empty string is an isogram. Ignore letter case.

//CodeWars Link: https://www.codewars.com/kata/isograms/javascript

//Solution 1
function isIsogram(str){
  let arr = [];
  let split = str.toLowerCase().split('');
  
  for(let i = 0; i < split.length; i++) {
    if(arr.indexOf(split[i]) === -1) {
      arr.push(split[i]);
    } else {
      return false;
    }
  }
  return true;
}