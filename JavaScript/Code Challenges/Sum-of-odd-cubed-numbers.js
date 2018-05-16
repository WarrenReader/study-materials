//Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the values aren't numbers.

//CodeWars Link https://www.codewars.com/kata/sum-of-odd-cubed-numbers/solutions/javascript

//Sample Data
//let samp = [1, 2, 3, 4, 'af']; //undefined
//let samp2 = [-3,-2, 2, 3]; //0

//Solution 1
function cubeOdd(arr) {
  let total = arr.reduce((total, e) => {
    if(e%2 !== 0) return total += Math.pow(e, 3);
    return total
  }, 0)

  return isNaN(total) ? undefined : total;
}
