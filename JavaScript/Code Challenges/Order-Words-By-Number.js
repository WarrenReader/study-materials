//Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

//CodeWars Link https://www.codewars.com/kata/your-order-please/javascript

//Sample Data
//order("is2 Thi1s T4est 3a") // "Thi1s is2 3a T4est"

//Solution 1
function order(words) {
  words = words.split(' ')
  let numbers = [];
  let sorted = [];

  words.map(e => e.split('').map(e => 
    isNaN(e) === false ? numbers.push(+e) : null));

  for(let i = 0; i < numbers.length; i++) {
    sorted[numbers[i] - 1] = words[i];
  }
  
  return sorted.join(' ');
}

//Solution 2
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    