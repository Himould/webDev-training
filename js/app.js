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
let attempt = 1;

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

// filter
// function validUserNames(usernames) {

//   validUserNames.filter(validUserNames.lenght < 10)
// }

// const validUserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

const validUserNames = username => username.filter(user => user.length < 10);

// spread, destructuring Arrays and objects

const nums = [23,4,46,455,77,4446,324,246,7774]
Math.max(nums)
Math.max(...nums)

console.log(...'hello');

const cats = ['blue', 'scout', 'rocket']
const dogs = ['rusty', 'bingo']
const allpets = [...cats, ...dogs]
console.log(allpets);

/* movies.map(movie => {
    return `${movie.title} ${movie.year} is rated ${movie.score}`
})

this can be destructure below

movies.map(({title, score, year}) => {
    return `${title} ${year} is rated ${score}`
}) */

// constructor function, take note of the capital and the new, call method- take not of use of () for methods
// let housekeeper1 = {
//     yearsOfExperience: 12,
//     name: "jane",
//     cleaningProperties:['bathroom', 'Lobby', 'bedroom']
// }

function HouseKeeper (yearsOfExperience, name, cleaningProperties) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningProperties = cleaningProperties;
    this.clean = function(){
        console.log('cleaning in progress');
    }
}
let housekeeper2 = new HouseKeeper(9, 'Tom', ['lobby', 'bedroom']);
console.log(housekeeper2);
console.log(housekeeper2.clean());

// form methods
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const product = form.elements.product.value;
    const qty = form.elements.qty.value;
    const newLi = document.createElement('li');
    newLi.innerText = `${qty} ${product}`;
    list.appendChild(newLi);
    form.reset();
});

let userInput = prompt('who is there');
if (userInput === 'Admin'){
   let pass = prompt('enter password');
    if (pass === 'TheMaster'){
        alert('welcome')
    } else if (pass === '' || pass === null){
        alert('wrong password')
    } else {alert('cancel')}
} else if (userInput === '' || userInput === null ){
    alert('i dont know you')
} else {
    alert('Cancel')
}
