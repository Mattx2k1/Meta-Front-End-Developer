/*
In this exercise lab you will practice creating arrays and objects.

Tasks to complete
1. Create a new empty array literal and assign it to the variable clothes.

2. Add 5 of your favorite items of clothing as strings using the push() method.

3. Remove the fifth piece of clothing from the array using the pop() method.

4. Add a new piece of clothing using the push() method.

5. Use console.log to show the third item from the clothes array in the console.

6. Create a new empty object literal and assign it to the variable favCar.

7. Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

8. Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.

9. Use the console to log the entire favCar object. 
*/

// step 1
var clothes = [];

// step 2
clothes.push("t-shirt");
clothes.push("hoodie");
clothes.push("skinny jeans");
clothes.push("sneakers");
clothes.push("underwear");
console.log(clothes);

// step 3
clothes.pop();
console.log(clothes);

// Step 4
clothes.push("socks");
console.log(clothes);

// step 5
console.log(clothes[2]);

// step 6
var favCar = {};
favCar.color = "blue";
favCar.convertible = true;
console.log(favCar);