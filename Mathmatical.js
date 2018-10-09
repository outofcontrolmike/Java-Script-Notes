// Java Script Math functions

console.log(Math.min(4.5, 5));
console.log(Math.min(19, 8));
console.log(Math.min(1, 1));
console.log(Math.random());

function square1(x) {
    console.log(x * x);
}

const square2 = x => x * x;

console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25