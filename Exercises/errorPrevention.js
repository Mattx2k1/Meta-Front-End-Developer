// Task 1: Code a function declaration
// You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

function addTwoNums(a, b) {
    console.log(a+b);
}

// Task 2: Invoke the addTwoNums function with a number and a string
// You need to invoke the addTwoNums using the following arguments: 5 and "5".

addTwoNums(5+"5");

// Task 3: Update the addTwoNums function with a try...catch block
// Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

function addTwoNums(a, b) {
    try {
        console.log(a+b) 
    } catch (err) {
        console.log(err);
    }
}