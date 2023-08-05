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