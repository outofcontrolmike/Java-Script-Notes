//First Program
console.log("Hello world!")

//Let's do Math

console.log("Hello again!");
console.log("let's do Math");
console.log(4 + 7);
console.log( 10 / 5);
console.log('Goodbye!');

//Declaring a variable

let a = 20;
a = 33;

console.log(a);

//Showing multiple values

const temp1 = 33.4;
const temp2 = 40;
const temp3 = 100;

console.log(temp1, temp2, temp3);
console.log(temp1 + temp2 + temp3);

//Declaring a constant

const b = 10;
 
// a constant can't be assigened a new value b = 5;

console.log(b);

// Increment a number variable

let c = 3;   // C contains 0
c += 1;     // C contains 1
c++;       // C contains 2

console.log(c);   // Shows 5


// Expressions

// 3 is an expression whose value is 3

const d = 3;

// d is an expression whose value is the value of d (3 here)

let e = d;

// (e + 1) is an expression whose value is e's + 1 (4 here)

e = e + 1;  // d now contains the value of 4

console.log(e);// show 4  


// Operator Priority
let f = 3 + 2 * 4;  // f contains 11 (3 + 8)
console.log(f);

f = (3 + 2) * 4;  // contians 20
console.log(f);


// Template Literal
const country = "France";
console.log(`I live in ${country}`);  // show "I live in France"
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

const state = "Missouri";
console.log( ` I live in ${state}`);
const z = 20;
const h = 40; 
console.log(`${z} + ${h} = ${z + h}`);

// Type Conversion

console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");

// Explicit Conversion

const t = "5";
console.log(t + 1); // Concatenation:  show the string 51
const i = Number(t) // converts string to number
console.log(i + 1); // numerical additon
const j = 6;
console.log("5" + String(j));  // converts number to string


