//Build Tower by the following given argument: number of floors (integer and always greater than 0). Tower block is represented as *.

//CodeWars Link 

//Example - 3 floors https://www.codewars.com/kata/build-tower/train/javascript
[
  '  *  ', 
  ' *** ', 
  '*****'
]

//Example - 6 floors
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

//Solution 1
function towerBuilder(n) {
  let tower = [''];
  let width, stars = n + (n - 1);
  let space = 0;

  for(let i = n - 1; i >= 0; i--) {
    tower[i] = '';
    //space
    for(let j = 0; j < space; j++) tower[i] += ' ';
    //stars
    for(let k = 0; k < stars; k++) tower[i] += '*';
    //space
    for(let l = 0; l < space; l++) tower[i] += ' ';
    stars -= 2;
    space++;
  }
  return tower;
}