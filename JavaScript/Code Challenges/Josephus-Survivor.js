//In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation. Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:
//josephus_survivor(7,3) => means 7 people in a circle;
//one every 3 is eliminated until one remains
//[1,2,3,4,5,6,7] - initial sequence
//[1,2,4,5,6,7] => 3 is counted out
//[1,2,4,5,7] => 6 is counted out
//[1,4,5,7] => 2 is counted out
//[1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

//CodeWars Link https://www.codewars.com/kata/josephus-survivor/javascript

//Sample Data
// josephusSurvivor(7,3) //returns 4

// Solution 1
function josephusSurvivor(n,k){
  //Create Sequence
  let sequence = [];
  for(let i = 1; i <= n; i++) {
    sequence.push(i);
  }
  //Remove Elements
  let index = 0;
  for(let j = 0; j < n - 1; j++) {
    for(let a = 1; a < k; a++) {
      if(index > sequence.length - 1) index = 0;
      index++
    }
    if(index > sequence.length - 1) index = 0;
    sequence.splice(index, 1);
  }
  return sequence[0]
}

josephusSurvivor(7, 3);