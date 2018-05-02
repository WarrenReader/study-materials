//Given a whole number, deterime if it's a square number. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

//CodeWars Link: https://www.codewars.com/kata/youre-a-square/javascript

//Sample Data
//Arguments: -439, -1, 0, 1, 2, 3, 6, 77, 99, 1004, 5730

//Solution 1
function isSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

//Solution 2
function isSquare(num) {
  for(let i = 0; i <= num; i++) {
    let val = i * i;
    if(val === num) return true;
    if(val > num) return false;
  }
  return false;
}