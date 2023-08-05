// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (key of dairy) {
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

function birdCan() {
    for ([key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
}

birdCan(bird);

// Task 3

function animalCan() {
    for([key, value] of Object.entries(bird)) {
        console.log(`${key}: ${value}`);
    }
    for([key, value] of Object.entries(animal)) {
        console.log(`${key}: ${value}`);
    }
}

animalCan(bird, animal);