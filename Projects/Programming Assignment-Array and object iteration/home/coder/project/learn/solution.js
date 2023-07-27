// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(foodgroup) {
    for (var i of foodgroup) {
        console.log(i);
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

