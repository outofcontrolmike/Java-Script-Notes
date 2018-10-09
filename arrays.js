// Store data in arrays

// first souliton - create several variables

const movie1 = "the wolf of wall street";
const movie2 = "ex";
const movie3 = "no";

const movies = {
    movie1: "The Wolf of Wall Street",
    movie2: "Zootopia",
    movie3: "BabySitting",
};
console.log(movies);

const movie = ["the Wolf", "Zoo", "Baby"];
const elements = ["Hello", 7, { message: "Hi mom" }, true]

console.log(movie.length);

//Access an element in an Array

console.log(movie[0]);
console.log(movie[1]);
console.log(movie[2]);
console.log(movie[3]);

//Iterating over an array

//use a for loop

for (let i = 0; i < movie.length; i++) {
    console.log(movie[i]);  // i is the index of all the movies
}

// for each

// myArray.forEach(myElement => {
    //use myElement to access each array element one by one

    const shows = ["seinfield", "Frasier", "Atypical"];
    shows.forEach(show => {
        console.log(show);
    });

// using for-of for iterable objects

for (const show of shows) {
    console.log(show);
}

//Updating an Array's content

//Adding an Element

const cartoons = ["southpark", "mario", "BeastWars"];
cartoons.push("SpongeBob");
console.log(cartoons[3]);

//Adding to the beginning of an array

const cartons = ["Southpark", "mario", "BeastWars"];
cartons.unshift("FairlyOddParents");
console.log(cartons);

//Removing an Element from an Array

const remove = ["Southpark", "mario", "BeastWars"];
cartons.unshift("FairlyOddParents");
cartons.pop();
console.log(remove);

//Using Splice (0,2) = starts at first value in array, removes 2 values

const splice = ["blue", "Red", "Yellow", "Purple", "Black"]
splice.splice(0, 2);
console.log(splice.length);
console.log(splice);