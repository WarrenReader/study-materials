//This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege. Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act). Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea. You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained. Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

//CodeWars Link https://www.codewars.com/kata/josephus-permutation/javascript

//Sample Data
//josephus([1,2,3,4,5,6,7],3) // return [3,6,2,7,5,1,4]

//Solution 1
function josephus(arr,k){
  let oldArr = arr.slice();
  let newArr = [];
  let index = 0;
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < k; j++) {
      index >= oldArr.length ? index = 0 : null;
      index++;
    }
    index >= oldArr.length ? index = 0 : null;
    newArr.push(oldArr.splice(index, 1))
  }

  return [].concat(...newArr);
}
