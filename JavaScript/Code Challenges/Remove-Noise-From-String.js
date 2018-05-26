//We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message. Your mission is to write a function which removes this noise from the message.

//Notice that noise can only be %$&/#·@|º\ª

//Codwars Link https://www.codewars.com/kata/5681cf0be812b41721000034

//Sample Data
// removeNoise("h%e&·%$·llo w&%or&$l·$%d") // returns hello world

//Solution 1
function removeNoise(str){
  let filtered = str.match(/[^%$&/#·@|º\\ª]/g);
  return filtered === null ? '' : filtered.join('');
}