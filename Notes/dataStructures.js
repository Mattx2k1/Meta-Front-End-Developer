// loop over an array and perform an action, example

// create the array of data
const grades = [75, 95, 90, 85, 80, 85];

// initialize a variable we'll save for later
let gradeSum = 0;

// for loop(initialize counter; while counter is less than the length of the grades array; add 1 to counter each loop)
for(i = 0; i < grades.length; i++) {
    gradeSum += grades[i]
}

// Display in the console (the result of the variable divided by the length of the array)
console.log(gradeSum / grades.length)

// examples

// the forEach() method

// Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

// Here's the basic syntax

// create an array
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
//create a function that takes fruit and index as parameters
function appendIndex(fruit, index) {
    // print to console the index and fruit
    console.log(`${index}. ${fruit}`)
}

// fruits is an array and we're running the forEach method on this array
// When we call the 'forEach' method on the fruits array, and add the function as a parameter, we are actioning the function on each of the array's members
// this method is like a built in for loop for arrays
// so for each entry in the array it is actioning the code in the body of the function
// this means it is taking in the array and parsing each item in the array as a 'fruit' and its index position within the array, and then printing to console the index position and fruit at that current iteration in the loop
// this continues until each array member has been iterated
fruits.forEach(appendIndex);

// the filter() method

// Filter - filters your arrays based on a specific test (condition?). Those array items that pass the test are returned.

// example - tested this and nothing generates. Used console.log to see the results and boolean values generate

// create the array
const nums = [0,10,20,30,40,50];

// run method on array / anonymous function?
nums.filter( function(num) {
    // return numbers greater than 20
    return num > 20;
})

// map method

// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

// mapping array directly - tested this and it does not work

// [0,10,20,30,40,50].map( function(num) {
//     return num / 10;
// })

// need to use the variable for the array?

nums.map( function(num) {
    return num / 10;
})

// Working with Objects in JavaScript

// convert an object to an array:

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);

/*

Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. Perhaps that data comes in from a third-party data provider and all you can do is code your program so that it consumes it. You'll learn more about the interchange of data on the web when you learn about JSON (JavaScript Object Notation).

*/

// Working with Maps in JavaScript

// A map can feel very similar to an object in JS.

// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

// example:

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// To get a specific value, you need to use the get() method. For example:  

bestBoxers.get(1); // 'The Champion'

// need to console log this to see the output
console.log(bestBoxers.get(1));

// Working with Sets in JavaScript

// A set is a collection of unique values.

// To build a new set, you can use the Set constructor:

new Set();

// The Set constructor can, for example, accept an array.

// This means that we can use it to quickly filter an array for unique members.

const repetitiveFruits =['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];

const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);