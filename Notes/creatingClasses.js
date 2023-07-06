// define the Train class

class Train {};

// In between the curly braces the first piece of code you need to define is the constructor:

class Train {
    constructor() {

    }
}

// The constructor will be used to build properties on the future object instance of the Train class

// For now, let's say that there are only two properties that each object instance of the Train class should have at the time it gets instantiated: color and lightsOn

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
}

// Notice the syntax of the constructor. The constructor is a special function in my Train class.

/* First of all, notice that there is no function keyword. Also, notice that the keyword constructor is used to define this function. You give your constructor function parameters inside an opening and closing parenthesis, just like in regular functions. The names of parameters are color and lightsOn.  

Next, inside the constructor function's body, you assigned the passed-in color parameter's value to this.color, and the passed-in lightsOn parameter's value to this.lightsOn.

What does this this keyword here represent?

It's the future object instance of the Train class.

Essentially, this is all the code that you need to write to achieve two things: 

This code allows me to build new instances of the Train class. 

Each object instance of the Train class that I build will have its own custom properties of color and lightsOn.

*/

// Now, to actually build a new instance of the Train class, I need to use the following syntax:

new Train()

/* 
Inside the parentheses, you need to pass values such as "red" and false, for example, meaning that the color property is set to "red" and the lightsOn property is set to false.

And, to be able to interact with the new object built this way, you need to assign it to a variable.
*/

// Putting it all together, here's your first train:

var myFirstTrain = new Train('red', false);

// Just like any other variable, you can now, for example, console log the myFirstTrain object:

console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// You can continue building instances of the Train class. Even if you give them exactly the same properties, they are still separate objects.

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

/* 
However, this is not all that classes can offer.

You can also add methods to classes, and these methods will then be shared by all future instance objects of my Train class.
*/

// Foe example:

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*
Now, there are four methods on your Train class: 
toggleLights(), lightsStatus(),  getSelf() and getPrototype().

The toggleLights method uses the logical not operator, !. This operator will change the value stored in the lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the lightsOn property on that given instance object.

The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.

The getSelf() method prints out the properties on the object instance it is called on.

The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.
*/

// Now you can build a brand new train using this updated Train class:

var train4 = new Train('red', false);

// And now, you can run each of its methods, one after the other, to confirm their behavior:

train4.toggleLights(); // undefined
train4.lightStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true
train4.getPrototypeOf(); // {constructor: f, toggleLights: f, lightStatus: f, getSelf: f, getPrototype: f}

/*
The result of calling toggleLights() is the change of true to false and vice-versa, for the lightsOn property.

The result of calling lightsStatus() is the console logging of the value of the lightsOn property.

The result of calling getSelf() is the console logging the entire object instance in which the getSelf() method is called. In this case, the returned object is the train4 object. Notice that this object gets returned only with the properties ("data") that was build using the constructor() function of the Train class. That's because all the methods on the Train class do not "live" on any of the instance objects of the Train class - instead, they live on the prototype, as will be confirmed in the next paragraph.

Finally, the result of calling the getPrototype() method is the console logging of all the properties on the prototype. When the class syntax is used in JavaScript, this results in only shared methods being stored on the prototype, while the constructor() function sets up the mechanism for saving instance-specific values ("data") at the time of object instantiation.

Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.

However, this is not the whole story.

It is possible to implement polymorphism using classes in JavaScript, by inheriting from the base class and then overriding the inherited behavior. To understand how this works, it is best to use an example.

In the code that follows, you will observe another class being coded, which is named HighSpeedTrain and inherits from the Train class.

This makes the Train class a base class, or the super-class of the HighSpeedTrain class. Put differently, the HighSpeedTrain class becomes the sub-class of the Train class, because it inherits from it.
*/

// To inherit from one class to a new sub-class, JavaScript provides the extends keyword, which works as follows:

