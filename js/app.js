// Objects
const product = {name: "Gummy Bears", 
                inStock: true, 
                price: 1.99, 
                flavors: ["grape", "apple", "cherry"]
            };
const restaurant = {
                name: 'Ichiran Ramen',
                address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
                city: 'Brooklyn',
                state: 'NY',
                zipcode: '11206',
            }
const fullAddress = `'${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}'`

// For loop, remember tit is seperated by semi colon
for (let i = 1; i <= 6; i++){
    console.log(i, 'Da ba dee da ba daa')  //console.log('Da ba dee da ba daa') this can work too without the i
};

for (let i = 25; i >= 0; i-= 5){
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++){
    console.log(people[i].toUpperCase());
}
/*
// Number Guess Game 

let maximum = parseInt(prompt("enter your maximum number"));
while (!maximum){
    maximum = parseInt(prompt(`enter a valid number`));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1
let guessedNumber = prompt(`enter your first guess! (type q to quit the game)`);
let attempt = 1

while (parseInt(guessedNumber) !== targetNumber){
    if (guessedNumber === "q") break;
    guessedNumber = parseInt(guessedNumber);
    if (guessedNumber > targetNumber){
        attempt++;
        guessedNumber = prompt(`Number too high, try again`);
    } else if (guessedNumber < targetNumber){
        attempt++;
        guessedNumber = (prompt(`Number too low, try again`));
    } else{
        guessedNumber = prompt(`Invalid guess. Please enter a number or 'q' to quit`)
    }
}
    if (guessedNumber === "q"){
        console.log(`YOU QUIT!!! TRY AGAIN ANOTHER TIME`)
    } else{
        alert(`YOU GOT IT!!! AFTER ${attempt} guesses`);
    } */
    
    // Using For...of Loop
    const numbers = [1,2,3,4,5,6,7,8,9];
    for (let numbs of numbers) {
    console.log(numbs * numbs);
}

// Fibonancci generator

function fibGen(n) {
    let output = [];
    if (n === 1){
        output = [0];
    } else if (n === 2){
        output = [0, 1]
    } else {
        output = [0, 1]
        for (i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    } 
    return output
}
fibGen(4);

// function that returns a square stored in variable using arrow func
const square = (x)=>(x*x)

// Method Exercise
const myMath = {
    area:(y) =>(y * y),
    perimeter:(z)=>(z * 4)
};


const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function(){
        this.eggCount++
        return 'EGG'
    }
}

// USING THE map for callback

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, 
    {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'},
    {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


// const firstNames = fullNames.map(function(fname){
//     return fname.first;
// });

// or solve it this way using arrow function

const firstNames = fullNames.map(names=>(names.first) )

console.log(firstNames);

// more arrow function
const greet = name => `Hey ${name}!`;