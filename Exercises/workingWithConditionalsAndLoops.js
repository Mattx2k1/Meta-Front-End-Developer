/*
Exercise 1

In this exercise, you will create the code for a for loop, using the counter variable named i starting from 1.

To make the counter increment by 1 on each loop, you will use i++.

The exit condition for the for loop should match the output given below. 

Inside the loop, write an if-else statement, which will check the following conditions:
*/

// using the counter variable named i starting from 1.
// To make the counter increment by 1 on each loop, you will use i++.
// Inside the loop, write an if-else statement, which will check the following conditions:

/*
Inside the loop, write an if-else statement, which will check the following conditions:

1. First, it will check if the value of i is 1. If it is, your code will console log the string "Gold medal".
2. Next, I will check if the value of i is 2. If it is, your code will console log the string "Silver medal".
3. Then, your code will check if the value of i is 3. If it is, it will console log the string "Bronze medal".
4. For all the remaining values of i, your code will console log just the value of i.

Note: The expected console log of the entire code should be as follows.
Gold medal
Silver medal
Bronze medal
4
5
6
7
8
9
10
*/

for (let i = 1; i < 11; i++) {
    if (i == 1) {
        console.log("Gold Metal")
    } else if (i == 2) {
        console.log("Silver Medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else console.log(i);
}

/* notes

1. Below code caused an infinity loop:

for (let i = 1; i < 11; i++) {
    if (i = 1) {
        console.log("Gold Metal")
    } else if (i = 2) {
        console.log("Silver Medal")
    } else if (i = 3) {
        console.log("Bronze medal")
    } else console.log(i);
}

2. Tried this variation to see if it would fixed it; got the same result:

for (let i = 1; i < 11; {
    if (i = 1) {
        console.log("Gold Metal")
        i++;
    } else if (i = 2) {
        console.log("Silver Medal")
        i++
    } else if (i = 3) {
        console.log("Bronze medal")
        i++
    } else console.log(i);
}

3. The infinity loops with the above must occur for these potential reasons:
    1. The original value of i is 1. '=' is an assignment value, so maybe it is checking the assignment or only original value in memory
    2. When using '==' this operator is checking for value and not type/location in memory
4. Even if the above aren't true, this proves '=' should not be used to check for value

*/

/*
Exercise 2

Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.
*/

/*
for (let i = 1; i < 11; i++) {
    if (i == 1) {
        console.log("Gold Metal")
    } else if (i == 2) {
        console.log("Silver Medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else console.log(i);
}
*/

let i = 1;
switch (i) {
    case 1: 
        console.log("Gold Metal");
        i++;
        break;
    case 2:
        console.log("Silver Medal");
        i++;
        break;
    case 3:
        console.log("Bronze Medal");
        i++;
        break;
    default:
        if (i < 11) {
            console.log(i);
            i++;
            break;
        }
        
}

/* 
Notes:

1. First tried this:

let i = 1;
switch (i) {
    case 1: 
        console.log("Gold Metal");
    case 2:
        console.log("Silver Medal");
    case 3:
        console.log("Bronze Medal");
    default:
        console.log(i);
}

2. Realized I need to increment:

let i = 1;
switch (i) {
    case 1: 
        console.log("Gold Metal");
        i++;
    case 2:
        console.log("Silver Medal");
        i++;
    case 3:
        console.log("Bronze Medal");
        i++;
    default:
        console.log(i);
        i++;
}

3. Realized I need to prevent an infinity loop; what is the exit statement? Decide I need an if statement at the defailt expression

let i = 1;
switch (i) {
    case 1: 
        console.log("Gold Metal");
        i++;
    case 2:
        console.log("Silver Medal");
        i++;
    case 3:
        console.log("Bronze Medal");
        i++;
    default:
        if (i < 11) {
            console.log(i);
            i++;
        }
        
}

4. Still getting an error with the above. Tried adding break statements

let i = 1;
switch (i) {
    case 1: 
        console.log("Gold Metal");
        i++;
        break;
    case 2:
        console.log("Silver Medal");
        i++;
        break;
    case 3:
        console.log("Bronze Medal");
        i++;
        break;
    default:
        if (i < 11) {
            console.log(i);
            i++;
            break;
        }
        
}

5. Still not working. Taking a break and will investigate later

6. This is the correct answer:

for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            //this block will run if no condition matches
            console.log(i)
    }
}

*/