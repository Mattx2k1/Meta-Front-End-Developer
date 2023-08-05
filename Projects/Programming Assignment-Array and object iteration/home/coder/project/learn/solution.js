// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(foodgroup) {
    for (key of foodgroup) {
        console.log(key);
    }

}

logDairy(dairy);

// Task 2

const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(animalObject) {
    for ([key, value] of Object.entries(animalObject)) {
        console.log(`${key}: ${value}`);
    }
}

birdCan(bird);

// Task 3

function animalCan(animalObject, animalPrototype) {
    for([key, value] of Object.entries(animalObject)) {
        console.log(`${key}: ${value}`);
    }
    for([key, value] of Object.entries(animalPrototype)) {
        console.log(`${key}: ${value}`);
    }
}

animalCan(bird, animal);

/* 
Got these errors before changes:

FAILED: Console logged expected values for logDairy - returned TypeError: foodgroup is not iterable but expected cheesesour creammilkyogurtice creammilkshake
FAILED: Console logged expected values for birdCan - returned TypeError: Cannot convert undefined or null to object but expected canFly: truehasFeathers: true
FAILED: Console logged expected values for animalCan - returned TypeError: Cannot convert undefined or null to object but expected canFly: truehasFeathers: truecanJump: true

*/

// New errors after second attempt:

/*

FAILED: Console logged expected values for logDairy - returned TypeError: foodgroup is not iterable but expected cheesesour creammilkyogurtice creammilkshake
FAILED: Console logged expected values for birdCan - returned TypeError: Cannot convert undefined or null to object but expected canFly: truehasFeathers: true
FAILED: Console logged expected values for animalCan - returned TypeError: Cannot convert undefined or null to object but expected canFly: truehasFeathers: truecanJump: true

*/