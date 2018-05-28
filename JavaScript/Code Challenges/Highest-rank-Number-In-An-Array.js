//Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

//CodeWars Link https://www.codewars.com/kata/highest-rank-number-in-an-array/train/javascript

//Sample Data
//highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) //returns 3
//highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) //returns 12

//Solution 1
function highestRank(arr){
  let count = {};
  let winner = {0:0};

  arr.forEach(e => count[e] ? count[e]++ : count[e] = 1)

  for(num in count) {
    if(count[num] > winner[Object.keys(winner)[0]]) {
      winner = Object.assign({}, {[num]: count[num]});
    } else if(count[num] === winner[Object.keys(winner)[0]]) {
        if(num > Object.keys(winner)[0]) {
          winner = Object.assign({}, {[num]: count[num]});
        }
      }
  }

  return +Object.keys(winner)[0];
}