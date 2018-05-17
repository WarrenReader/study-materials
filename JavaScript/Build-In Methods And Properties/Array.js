let example = [1,2,3,4,5];

//PROPERTIES

//Array.length
//example.length //returns 5

//METHODS

//Array.prototype.map()
//This method creates a new array with the results of calling a provided function on every element in the array. It makes no changes to the original array and returns a new array.
//array.map(function(element, index, array) {return..})
//let newArray = example.map(e => e + 2); //newArray is assigned [3,4,5,6,7]

//Array.prototype.forEach()
//This method executes a provided funtion once for each array element. It changes the original array. It makes no changes to the original array and returns nothing.
//array.forEach(function(element, index, array) {return..})
//example.forEach(e => console.log(e)); //console logs each element to the console

//Array.isArray()
//This method determines whether the passed value is an Array.
//Array.isArray(arg)
//Array.isArray(example) //returns true

//Array.prototype.slice()
//