//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number. Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

//CodeWars Link https://www.codewars.com/kata/iq-test/javascript

//Sample Data
//let samp = "2 4 7 8 10";
//let samp2 = "1 2 2";

//Solution 1
function iqTest(nums){
  let arr = nums.split(' ').map(e => Number(e)%2);
  let even = arr.filter(e => e === 0).length;
  let odd = arr.filter(e => e > 0).length;
  if(even > odd) {
    return arr.findIndex(e => e%2 > 0) + 1
  } else {
    return arr.findIndex(e => e%2 === 0) + 1
  }
}
