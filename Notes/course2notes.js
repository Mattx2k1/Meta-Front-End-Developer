// Course 2 notes

/*
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Counting completed!")
*/

/*
var i = 2018;
while (i < 2023) {
    console.log(i)
    i = i + 1;
}
console.log('Countdown finished!'); */

//nested loops examples

// custom multiplication table

for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

// custom division table
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}


function listArrayItems(arr) {
    for (let i = 0; i >= arr.length; i++) {
        // code to be looped goes here
    }
}