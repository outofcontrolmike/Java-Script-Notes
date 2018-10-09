// 3 === means equals
// 2 == means, does not equal


let num = 0;
let str = '0';

console.log(num === num);  // true
console.log(str === str); // true

console.log(num === str); // false
console.log(num==str); // true

//Conditions

const number = 5;
if (number > 0) {
    console.log(`${number} is positive`);
}

// Switch

const x = "def";
switch (x) {
    case "abc":
    console.log("x = abc");
    break // ommitted: the next block is also run!
    case "def":
    console.log("x = def and that's it");
    break;
}

// While Loop
// this loop itterates from the value it's set to to the value <=5;  displays 1-5

let number1 = 1;
    while (number1 <=5) {
        console.log(number1);
        number1++;
    }


// For Loop

for (let i = 1; i <=20; i++) {
    console.log(i);
}

