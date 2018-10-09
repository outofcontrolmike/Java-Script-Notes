/*/ Function Decrlation
function myFunction(param1, param2, ...) {
    // Function code using param1, param2, ...
}

// Function Call
myFunction(arg1, arg2, ...);

*/

//first example

function sayHello() {
    console.log("Hello");
}
sayHello();

function sayBi() {
    return "Bye!"
}
console.log("Start");
const message = sayBi();  // This stores what the function does in a new variable
console.log(message);
console.log("End of Programination");

//Return

function myNew() {
    let returnValue;
    // Calculate return Value
    // returnValue
    return returnValue;
}

// Get return value from myNew
const result = myNew();
console.log(result);

//Simplify

function sayHello() {
    return "Hello";
}

console.log(sayHello());

//Declaring a local variable in function

function sayHola() {
    const message = "Holah!"; // Basically the same as console.log while not storing a value in a variable
    return message;
}
console.log(sayHola());


// Parameter Passing

function sayName(name) {
    const message = `Hello, ${name}`;
    return message;
}

console.log(sayName("Michael"));  // These arguments are passed first to the function and then to message
console.log(sayName("Wilson"));



function sayNello(name) {
    // Here, "name" is the function parameter
    const message = `Nello, ${name}!`;
    return message;
}

// Here, "name" is a variable used as an argument
let name = "Marcos";
console.log(sayNello(name));
name = "Thomas";
console.log(sayNello(name));


//When calling a function, respecting the number and order of parameters is paramount! Check out the following example.

function presentation(name, age) {
    console.log(`Your name is ${name} and you're ${age} years old`);

}

presentation("Garland", 9);
presentation(27, "Michael");


// Anonymous Functions

const hello = function(name) {
    const message = `Hello, ${name}!`;
    return message;
};

console.log(hello("Michael"));

// Fat Arrow Function Syntax

const tello = name => `Hello, ${name}!`;

console.log(tello("Kate"));
